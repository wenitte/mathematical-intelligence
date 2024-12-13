# 

Source: https://proofwiki.org/wiki/Matrix_Space_Semigroup_under_Hadamard_Product


This page has been identified as a candidate for refactoring of medium complexity.In particular: 3 theorems here to be separated out into their own pagesUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\map {\MM_S} {m, n}$ be the matrix space over a semigroup $\struct {S, \cdot}$.

Then the algebraic structure $\struct {\map {\MM_S} {m, n}, \circ}$, where $\circ$ is the Hadamard product, is also a semigroup.

If $\struct {S, \cdot}$ is a commutative semigroup then so is $\struct {\map {\MM_S} {m, n}, \circ}$.

If $\struct {S, \cdot}$ is a monoid then so is $\struct {\map {\MM_S} {m, n}, \circ}$.


Proof
$\struct {S, \cdot}$ is a semigroup and is therefore closed and associative.
As $\struct {S, \cdot}$ is closed, then so is $\struct {\map {\MM_S} {m, n}, \circ}$ from Closure of Hadamard Product‎.
As $\struct {S, \cdot}$ is associative, then so is $\struct {\map {\MM_S} {m, n}, \circ}$ from Associativity of Hadamard Product.
Thus if $\struct {S, \cdot}$ is a semigroup then so is $\struct {\map {\MM_S} {m, n}, \circ}$.

If $\struct {S, \cdot}$ is commutative, then so is $\struct {\map {\MM_S} {m, n}, \circ}$ from Commutativity of Hadamard Product.
Thus if $\struct {S, \cdot}$ is a commutative semigroup then so is $\struct {\map {\MM_S} {m, n}, \circ}$.

Let $\struct {S, \cdot}$ be a monoid, with identity $e$.
Then from Zero Matrix is Identity for Hadamard Product, $\struct {\map {\MM_S} {m, n}, \circ}$ also has an identity and is therefore also a monoid.
$\blacksquare$





