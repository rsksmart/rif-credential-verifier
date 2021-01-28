<p align="middle">
  <img src="https://www.rifos.org/assets/img/logo.svg" alt="logo" height="100" >
</p>
<h3 align="middle"><code>rif-credential-verifier</code></h3>
<p align="middle">
  Verifier credentials and presentations
</p>
<p align="middle">
  <a href="https://circleci.com/gh/rsksmart/rif-credential-verifier">
    <img src="https://img.shields.io/circleci/build/github/rsksmart/rif-credential-verifier?label=CircleCI" alt="npm" />
  </a>
  <a href="https://lgtm.com/projects/g/rsksmart/rif-credential-verifier/alerts/">
    <img src="https://img.shields.io/lgtm/alerts/github/rsksmart/rif-credential-verifier" alt="Alerts">
  </a>
  <a href="https://lgtm.com/projects/g/rsksmart/rif-credential-verifier/context:javascript">
    <img src="https://img.shields.io/lgtm/grade/javascript/github/rsksmart/rif-credential-verifier" alt="Code Quality">
  </a>
</p>

## Usage

The RIF Credential Verifier can verify and decode JWT presentations and credentials. This site can be used with the [RIF Identity Manager](https://rsksmart.github.io/rif-identity-manager/) to verify credential presentations.

To test it yourself, get an email credential from the [RIF Email VC Issuer](https://rsksmart.github.io/email-vc-issuer/). After verfying your email address, the issuer will ask you to save it in your datavault. Next, navigate to the [RIF Identity Manager](https://rsksmart.github.io/rif-identity-manager) and log in. Navigate to DataVault and scroll down to Credentials. Click 'download' and then 'present' to get a presentation JWT.

Don't want your own credential? Use one of the [sample credentials](https://github.com/rsksmart/rif-credential-verifier/blob/develop/docs/samples.md).

### deep linking

You can start the decoding process by appending `?jwt=[your JWT]` to the URL. For example, [this link here](https://rsksmart.github.io/rif-credential-verifier/?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE2MTE3Njc1MzEsInZwIjp7IkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIl0sInR5cGUiOlsiVmVyaWZpYWJsZVByZXNlbnRhdGlvbiJdLCJ2ZXJpZmlhYmxlQ3JlZGVudGlhbCI6WyJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5rc2lmUS5leUoyWXlJNmV5SkFZMjl1ZEdWNGRDSTZXeUpvZEhSd2N6b3ZMM2QzZHk1M015NXZjbWN2TWpBeE9DOWpjbVZrWlc1MGFXRnNjeTkyTVNKZExDSjBlWEJsSWpwYklsWmxjbWxtYVdGaWJHVkRjbVZrWlc1MGFXRnNJaXdpUlcxaGFXd2lYU3dpWTNKbFpHVnVkR2xoYkZOamFHVnRZU0k2ZXlKcFpDSTZJbVJwWkRwbGRHaHlPbkp6YXpvd2VEaGhNekprWVRZeU5HUmtPV1poWkRoaVpqUm1NekprT1RRMU5tWXpOelJpTmpCa09XRmtNamc3YVdROU1XVmlNbUZtTm1JdE1HUmxaUzAyTURrd0xXTmlOVFV0TUdWa01Ea3paamxpTURJMk8zWmxjbk5wYjI0OU1TNHdJaXdpZEhsd1pTSTZJa3B6YjI1VFkyaGxiV0ZXWVd4cFpHRjBiM0l5TURFNEluMHNJbU55WldSbGJuUnBZV3hUZFdKcVpXTjBJanA3SW1WdFlXbHNRV1JrY21WemN5STZJbXBsYzNObFFHbHZkbXhoWW5NdWIzSm5JbjE5TENKemRXSWlPaUprYVdRNlpYUm9janB5YzJzNmRHVnpkRzVsZERvd2VETmtaREF6WkRka05tTXpNVE0zWmpGbFlqYzFPREppWVRVNU5UZGlPR0V5WlRJMlpqTXdOR0VpTENKdVltWWlPakUyTURneU1qRXhOREFzSW1semN5STZJbVJwWkRwbGRHaHlPbkp6YXpvd2VFWmpZemRsTmpreFlqTmlOak14T0RJNVF6azJORGt3TlRZNVlXRTFSakZGTXpGbFJrRm1PR1lpZlEub210RlVRUkdhemFNQk1rbXpIWF9YNVdhVTBxdV9mUkQ4ZXV4X0U3bkRqcnhHWHRBS3htLXZaaW9ISmR2ZDdCRkYxb1F1dnpTdWU3YVNWeGY1b3NTSWciXSwibmJmIjoxNjExNzY3NTMxLCJleHAiOjE2OTA2MDc1MzF9LCJpc3MiOiJkaWQ6ZXRocjpyc2s6dGVzdG5ldDoweDNkZDAzZDdkNmMzMTM3ZjFlYjc1ODJiYTU5NTdiOGEyZTI2ZjMwNGEifQ._adSIJ6X0W6g8FSZZDzUeJP0z3xNiCtZ5HvP2uMseDU_he0pSIbs7vSbM6cZDAoHKS-24m62jz3eaK7MaFBYvA).


### ethSign

The verifier supports credentials and presentations signed with ethSign, i.e. a wallet such as metamask. The default is the presentation is signed with ethSign and the credentials are not. However, the user can change these defaults when they decode.

## Run Locally

Setup for this project is fairly simple.

### `yarn`

Install project dependencies

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Runs the tests, displays coverage, and runs the linter. See below for more specific commands

#### `yarn test:watch`

Launches the test runner in the interactive watch mode.

#### `yarn test:coverage`

Runs the test coverage and saves the report in the`coverage` folder.

#### `yarn lint`

Runs the linter and returns status.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### CI scripts

#### `yarn test:ci`

Runs the test coverage and saves the report in the`reports` folder. Uses `maxWorkers=2` - CircleCI recommendation

#### `yarn test:ci`

Runs the linter and saves the report in the`reports` folder.
