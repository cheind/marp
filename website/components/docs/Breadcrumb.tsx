import Link from 'next/link'

export type BreadcrumbProps = {
  breadcrumbs: {
    key: string
    link?: string
    title: string
  }[]
}

export const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => (
  <div className="breadcrumb-wrapper">
    <div className="breadcrumb-container">
      <ol>
        {breadcrumbs.map(({ key, title, link }) => (
          <li key={key}>
            {link ? (
              <Link href={link}>
                <a>{title}</a>
              </Link>
            ) : (
              title
            )}
          </li>
        ))}
      </ol>
    </div>
    <style jsx>{`
      .breadcrumb-wrapper {
        @apply relative h-6 overflow-hidden;
      }
      .breadcrumb-container {
        @apply absolute inset-0 flex items-center justify-end;
      }
      ol {
        @apply inline-flex flex-1 flex-nowrap whitespace-nowrap;
      }
      li {
        @apply block;
      }
      li::after {
        @apply bg-no-repeat pl-6;

        background-image: url('https://icongr.am/octicons/triangle-right.svg?color=718096');
        background-position: 0.25rem center;
        background-size: 1rem 1rem;
        content: '';
      }
      li:last-child {
        @apply font-bold;
      }
      li:last-child::after {
        @apply hidden;
      }
    `}</style>
  </div>
)
