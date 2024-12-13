# 

Source: https://proofwiki.org/wiki/Primitive_Root_is_Generator_of_Reduced_Residue_System


This page has been identified as a candidate for refactoring of medium complexity.In particular: Extract the definition of "generator".Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $a$ be a primitive root of $n$.
Then:

$\set {a, a^2, a^3, \ldots, a^{\map \phi n} }$
where $\map \phi n$ is the Euler phi function of $n$, is the reduced residue system of $n$.

Thus the first $\map \phi n$ powers of $a$ "generates" the reduced residue system of $n$.
We say that $a$ is a generator of the reduced residue system of $n$.


Proof
Let $R = \set {a, a^2, a^3, \ldots, a^{\map \phi n} }$.
Each element of $R$ is coprime to $n$ as $a \perp n$.
Suppose $a^r \equiv a^s \pmod n$ where $1 \le r \le s \le \map \phi n$.
Then $a^{r - s} \equiv 1 \pmod n$.
From the definition of primitive root, the multiplicative order of $a$ modulo $n$ is $\map \phi n$.
So from Integer to Power of Multiple of Order $\map \phi n$ divides $r - s$ and so $r = s$.
So no two elements are congruent modulo $n$.
So as $R$ contains $\map \phi n$ integers none of which are congruent modulo $n$ to any of the others, $R$ is a reduced residue system of $n$.
$\blacksquare$





