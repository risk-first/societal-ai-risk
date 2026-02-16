import React from 'react';
import styles from './styles.module.css'
import { usePluginData } from '@docusaurus/useGlobalData'
import Link from '@docusaurus/Link';

function findDocByGemaraId(allTags, gemaraId) {
	// Search through all tag collections to find doc with matching gemara.id
	for (const docs of Object.values(allTags)) {
		const found = docs.find(d => d.frontMatter?.gemara?.id === gemaraId);
		if (found) return found;
	}
	return null;
}

const Practice = ({ referenceId, remarks, allTags }) => {
	const doc = findDocByGemaraId(allTags, referenceId);
	const link = doc?.permalink || `/Practices/${referenceId}`;
	const title = doc?.title || referenceId;
	
	return (
		<li><Link to={link}>{title}</Link>{remarks ? `: ${remarks}` : ''}</li>
	)
}

export default ({ fm }) => {
	const gemara = fm.gemara || {}
	const allTags = usePluginData('category-listing');

	const actors = gemara.actors || []
	const mitigatedBy = gemara['mitigated-by'] || []

	return (
		<div className={styles.threatIntro}>
			<p className={styles.description}>{gemara.description || fm.description}</p>

			{actors.length > 0 && (
				<>
					<h3>Actors</h3>
					<ul>
						{actors.map((actor, idx) => (
							<li key={idx}>
								<strong>{actor.name}</strong> ({actor.type}): {actor.description}
							</li>
						))}
					</ul>
				</>
			)}

			{mitigatedBy.length > 0 && (
				<>
					<h3>Mitigated By</h3>
					<ul>
						{mitigatedBy.map((practice, idx) => (
							<Practice 
								key={idx} 
								referenceId={practice['reference-id']} 
								remarks={practice.remarks}
								allTags={allTags}
							/>
						))}
					</ul>
				</>
			)}
		</div>
	)
}
