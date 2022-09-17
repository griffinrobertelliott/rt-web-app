import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from "powerbi-client"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: '3775d537-ef60-46d2-af71-5a0887a89855',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3775d537-ef60-46d2-af71-5a0887a89855&groupId=78cc7eaf-3b4e-4aaf-a06d-25ae4301b84f&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtVVMtRC1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBRdWVyeURhdGFTYWFTRW1iZWQiOnRydWUsInNraXBRdWVyeURhdGFQYWFTRW1iZWQiOnRydWUsInNraXBRdWVyeURhdGFFeHBvcnRUbyI6dHJ1ZX19",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOTIyNGI3ZWYtNTFmOC00ZDhjLThkNTktNWQyMjAyY2VjMzM1LyIsImlhdCI6MTY2MzQ1MzQzOSwibmJmIjoxNjYzNDUzNDM5LCJleHAiOjE2NjM0NTc3ODgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFCdklxYVdjQlkvWkZMOWpMa0QxbDd5OGdJenpkeEpXbzBBSkRUaVhad0VKRStzaHV0OGdNenQzOWFkVTVRc3UwIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiRWxsaW90IiwiZ2l2ZW5fbmFtZSI6IkZpbiIsImlwYWRkciI6IjM1LjEyOC4yMi4xMTgiLCJuYW1lIjoiRmluIEVsbGlvdCIsIm9pZCI6IjQ0OWI1ZjFiLWViYjItNDM1Zi1hNGU1LTNlNTNiZWFjMGYwZSIsInB1aWQiOiIxMDAzMjAwMTQ2RDIxMDE0IiwicmgiOiIwLkFWRUE3N2Nra3ZoUmpFMk5XVjBpQXM3RE5Ra0FBQUFBQUFBQXdBQUFBQUFBQUFCUkFCOC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJQWENnYWx2OWdETWgtdW9NZkc1Mk9reEgxVkJVaklJc2xrQWZjTEt0Nng4IiwidGlkIjoiOTIyNGI3ZWYtNTFmOC00ZDhjLThkNTktNWQyMjAyY2VjMzM1IiwidW5pcXVlX25hbWUiOiJmaW5Acm9ib3RpcmUub25taWNyb3NvZnQuY29tIiwidXBuIjoiZmluQHJvYm90aXJlLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6Ino2UnlTRThBejBXOTc1bERHelM3QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImQyNGFlZjU3LTE1MDAtNDA3MC04NGRiLTI2NjZmMjljZjk2NiIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.kJbBFwEFHgVVpsRLfv7d2JLd1AaR83bplFvnzzvAdBayqlbxXaHCiJHVXWzDcOrneODPhb-bL0VcniGGhkhncARU8LAmUUDLcwUHHrovcpVUnj5ry9_So9fWkw6zhR_kKmLmwL78a0hxSL0umuQFzoCt9DlYJrEg6dhJHQ6KxyOGEg8mWzTF89w1wdJfgeHxJ7RqIRXmhQe2oKWDqtAfNE78Ee3mvnXydsme5s6-taq3HwUzbW2AFKvjtBNu_0ceWJ6TMxKJOoh3gQOe-Ci-GlkeqyCPyM4oNmdQIbK2E4CbtKuHGpnAeEmer7UQpisoqqyHt-6sd6gXqrSPuf0Ptg',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                }
              },
              // background: models.BackgroundType.Transparent,
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
