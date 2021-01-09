import Container from './container'

export default function Alert({ preview }) {
  return (
    <div className="border-b">
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              Showing draft content.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:opacity-50 focus:opacity-50"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              Showing published content.{' '}
              <a
                href="/api/preview"
                className="underline hover:opacity-50 focus:opacity-50"
              >
                Click here
              </a>{' '}
              to enter preview mode!
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
