# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-12-29)

<section class="reverts">

### Reverts

-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`df33cdf`](https://github.com/stdlib-js/stdlib/commit/df33cdfc4f2511698aca3f3a8da19dd585f5b431): update signature to accept doubles

    -   User code should behave similarly in the primary case of providing integer-valued input values. However, no longer will real-values truncate. Now, real-valued inputs will result in `NaN`, which is, arguably, better behavior, as real-to-integer truncation can be a source of silent bugs.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`baf65a6`](https://github.com/stdlib-js/stdlib/commit/baf65a6e432f27fd2876946a96d4801bb469c3ad) - **chore:** add structured package data for `math/base/special/fibonacci` [(#8012)](https://github.com/stdlib-js/stdlib/pull/8012) _(by Lokesh Ranjan, Athan Reines)_
-   [`c5b3e0a`](https://github.com/stdlib-js/stdlib/commit/c5b3e0a0dab79dd39984f0a6bf45cd1a80f1f865) - **docs:** replace integers with doubles in `math/base/special/fibonacci` [(#7937)](https://github.com/stdlib-js/stdlib/pull/7937) _(by Gunj Joshi)_
-   [`df33cdf`](https://github.com/stdlib-js/stdlib/commit/df33cdfc4f2511698aca3f3a8da19dd585f5b431) - **refactor:** modify C implementation to accept `double` instead of `int32` in `math/base/special/fibonacci` [(#7923)](https://github.com/stdlib-js/stdlib/pull/7923) _(by Gunj Joshi)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`d3bf998`](https://github.com/stdlib-js/stdlib/commit/d3bf998980b55e4a0ad53ad3b9053c9b12204b0e) - **bench:** update random value generation [(#6269)](https://github.com/stdlib-js/stdlib/pull/6269) _(by Harsh Yadav, Athan Reines)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`f13ddb2`](https://github.com/stdlib-js/stdlib/commit/f13ddb2eb01e5520b6fa98634bbf9de76793036f) - **style:** use spaces for alignment in C comments _(by Philipp Burckhardt)_
-   [`b0e68c5`](https://github.com/stdlib-js/stdlib/commit/b0e68c5bc8ee985794eb2ea1791c9337cd15fbd0) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`1dd3fdc`](https://github.com/stdlib-js/stdlib/commit/1dd3fdcf42490e1d3c93fa3a21a65aca69454932) - **revert:** chore: update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`cdaf16f`](https://github.com/stdlib-js/stdlib/commit/cdaf16f9f3c05f153fcffbb00dab12412196cce6) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 6 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Harsh Yadav
-   Karan Anand
-   Lokesh Ranjan
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="bug-fixes">

### Bug Fixes

-   [`5108869`](https://github.com/stdlib-js/stdlib/commit/5108869248f78854546359b8ce35916c612a90cb) - remove invalid examples [(#1814)](https://github.com/stdlib-js/stdlib/pull/1814)

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`5108869`](https://github.com/stdlib-js/stdlib/commit/5108869248f78854546359b8ce35916c612a90cb) - **fix:** remove invalid examples [(#1814)](https://github.com/stdlib-js/stdlib/pull/1814) _(by Gunj Joshi, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="features">

### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`c5da1f9`](https://github.com/stdlib-js/stdlib/commit/c5da1f9a22b1033d40115798acf13a09acf9410d) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_
-   [`20f8809`](https://github.com/stdlib-js/stdlib/commit/20f8809022581a74a0d7d9643840c4ae7e7de7b5) - **chore:** update package meta data [(#911)](https://github.com/stdlib-js/stdlib/pull/911) _(by stdlib-bot, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-14)

No changes reported for this release.

</section>

<!-- /.release -->

