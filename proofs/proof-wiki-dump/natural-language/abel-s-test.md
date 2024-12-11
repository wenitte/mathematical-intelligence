# 

Source: https://proofwiki.org/wiki/Abel%27s_Test



Theorem
Let $\ds \sum b_n$ be a convergent real series.
Let $\sequence {a_n}$ be a decreasing sequence of positive real numbers.

Then the series $\ds \sum a_n b_n$ is also convergent.


Abel's Test for Uniform Convergence
Let $\sequence {\map {a_n} z}$ and $\sequence {\map {b_n} z}$ be sequences of complex functions on a compact set $K$.
Let $\sequence {\map {a_n} z}$ be such that:

$\sequence {\map {a_n} z}$ is bounded in $K$
$\ds \sum \size {\map {a_n} z - \map {a_{n + 1} } z}$ is convergent with a sum which is bounded in $K$
$\ds \sum \map {b_n} z$ is uniformly convergent in $K$.

Then $\ds \sum \map {a_n} z \map {b_n} z$ is uniformly convergent on $K$.


Proof

This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $b_0 = 0$.
Let $B_N = \ds \sum_{k \mathop = 0}^N b_k$.
Then: 

$\forall n \ge 1: b_n = B_n − B_{n − 1}$
From Abel's Lemma:
$\ds \sum_{k \mathop = 1}^N a_k b_k = \sum_{k \mathop = 1}^{N - 1} B_k \paren {a_k - a_{k + 1} } + a_N B_N$

By the Monotone Convergence Theorem:

$\sequence {a_n}$ converges
$\sequence {B_N}$ converges since $\ds \sum b_n$ converges.
Hence the second addend $a_N B_N$ converges.
It remains to prove the first addend $\ds \sum B_k \paren {a_k − a_{k + 1} }$ converges.
Since $\sequence {B_N}$ converges, $\size {B_N} \le M$ for some $M \in \N$.














\(\ds \sum_1^N \size {B_k \paren {a_k -a_{k + 1} } }\)

\(\le\)







\(\ds M \sum_1^N \size {a_k - a_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds M \size {a_1 - a_{N + 1} }\)





as $\sequence {a_n}$ is decreasing














\(\ds \)

\(\to\)







\(\ds M \size {a_1 - a}\)





as $a_k \to a$



Hence $\ds \sum B_k \paren {a_k − a_{k + 1} }$ converges absolutely.
Hence $\ds \sum a_n b_n$ converges.
$\blacksquare$


Source of Name
This entry was named for Niels Henrik Abel.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Abel's test: 1.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Abel's test
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Abel's test
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Abel's test
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Abel's test




