# 

Source: https://proofwiki.org/wiki/Factorial_Divides_Product_of_Successive_Numbers


It has been suggested that this page or section be merged into Divisibility of Product of Consecutive Integers.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $m, n \in \N_{\ge 1}$ be natural numbers
Let $m^{\overline n}$ be $m$ to the power of $n$ rising.
Then:

$m^{\overline n} \equiv 0 \bmod n!$
That is, the factorial of $n$ divides the product of $n$ successive numbers.


Proof

The validity of the material on this page is questionable.In particular: This is not enough. It might superficially be that e.g. the factors of $2$ and $6$ coincide. Effectively this argument reduces to the theorem; it's almost circularYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $m \in \N_{\ge 1}$.
Consider the set:

$S = \set{m, m + 1, m + 2, \ldots, m + n - 1}$
Note $S$ has $n$ elements.
By Set of Successive Numbers contains Unique Multiple:

$\set m$ contains a factor of $1$
$\set {m, m + 1}$ contains a factor of $2$
and in general:

$\set {m, m + 1, \ldots, m + j - 1}$ contains a factor of $j$.
It follows that $S$ contains factors of $1, 2, 3, \ldots, n$.
Multiplying all elements of $S$ gives:














\(\ds m \paren {m + 1} \dotsm \paren {m + n - 1}\)

\(=\)







\(\ds k_1 2 k_2 3 k_3 \dotsm \paren {n - 1} k_{n - 1} n k_n\)





for some $k_1, k_2, \ldots, k_n \in N$














\(\ds \)

\(=\)







\(\ds \paren {k_1 k_2 \dotsm k_{n - 1} k_n} \paren {1 \times 2 \times \dotsm \times \paren {n - 1} \times n}\)














\(\ds \leadsto \ \ \)





\(\ds m^{\overline n}\)

\(=\)







\(\ds K n!\)





for some $K \in \N$








\(\ds \leadsto \ \ \)





\(\ds m^{\overline n}\)

\(\equiv\)







\(\ds 0 \bmod n!\)









$\blacksquare$





