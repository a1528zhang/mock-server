import {links, Link} from '../data/links';
export function getLink(_, {id}): Link {
    return links.find((data) => data.id === id);
}

export function allLinks(): Link[] {
    return links;
}