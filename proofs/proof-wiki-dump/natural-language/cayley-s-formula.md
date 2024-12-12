# 

Source: https://proofwiki.org/wiki/Cayley%27s_Formula

This proof is about Cayley's Formula in the context of Graph Theory. For other uses, see Cayley's Theorem.



Theorem
The number of distinct labeled trees with $n$ nodes is $n^{n - 2}$.


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Follows directly from Bijection between Prüfer Sequences and Labeled Trees.
This shows that there is a bijection between the set of labeled trees with $n$ nodes and the set of all Prüfer sequences of the form:

$\tuple {\mathbf a_1, \mathbf a_2, \ldots, \mathbf a_{n - 2} }$
where each of the $\mathbf a_i$'s is one of the integers $1, 2, \ldots, n$, allowing for repetition.
Since there are exactly $n$ possible values for each integer $\mathbf a_i$, the total number of such sequences is $\ds \prod_{i \mathop = 1}^{n - 2} n$.
The result follows from Equivalence of Mappings between Finite Sets of Same Cardinality.
$\blacksquare$


Examples
Order 4
There are $16$ distinct labeled trees of order $4$.


Also known as
Cayley's formula is also known as Cayley's theorem, but there is more than one such-named theorem.
Hence Cayley's formula is preferred on $\mathsf{Pr} \infty \mathsf{fWiki}$.


Source of Name
This entry was named for Arthur Cayley.


Historical Note
Arthur Cayley first stated Cayley's Formula in his A Theorem on Trees (Quart. J. Pure Appl. Math. Vol. 23: pp. 376 – 378) in $1889$.
However, his proof was unsatisfactory as he discussed only the case where $n = 6$, and his method cannot be generalized to larger $n$.
The proof given here, the work of Heinz Prüfer, first appeared in $1918$.


Sources
1889: Arthur Cayley: A Theorem on Trees (Quart. J. Pure Appl. Math. Vol. 23: pp. 376 – 378)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): tree
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): tree




