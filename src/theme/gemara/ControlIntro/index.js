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

const Threat = ({ referenceId, reason, allTags }) => {
	const doc = findDocByGemaraId(allTags, referenceId);
	const link = doc?.permalink || `/Risks/${referenceId}`;
	const title = doc?.title || referenceId;
	
	return (
		<li>
			<Link to={link}>{title}</Link>
			{reason && `: ${reason}`}
		</li>
	)
}

export default ({ fm }) => {
	const gemara = fm.gemara || {}
	const allTags = usePluginData('category-listing');

	const objective = gemara.objective
	const mitigates = gemara.mitigates || []

	return (
		<div className={styles.controlIntro}>
			<div className={styles.header}>
				<p className={styles.objective}>{objective || fm.description}</p>
			</div>

			{mitigates.length > 0 && (
				<>
					<h3>Mitigates Risks</h3>
					<ul>
						{mitigates.map((mapping, idx) => (
							<Threat 
								key={idx} 
								referenceId={mapping['reference-id']} 
								reason={mapping.reason}
								allTags={allTags}
							/>
						))}
					</ul>
				</>
			)}
		</div>
	)
}
