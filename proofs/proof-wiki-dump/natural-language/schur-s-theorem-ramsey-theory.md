# 

Source: https://proofwiki.org/wiki/Schur%27s_Theorem_(Ramsey_Theory)



Theorem
Let $r$ be a positive integer.
Then there exists a positive integer $S$ such that:

for every partition of the integers $\set {1, \ldots, S}$ into $r$ parts, one of the parts contains integers $x$, $y$ and $z$ such that:
$x + y = z$


Proof
Let:

$n = \map R {3, \ldots, 3}$
where $\map R {3, \ldots, 3}$ denotes the Ramsey number on $r$ colors.
Take $S$ to be $n$.


This page has been identified as a candidate for refactoring of medium complexity.In particular: Extract the below process of "coloring" a partition into its own pageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
partition the integers $\set {1, \ldots, n}$ into $r$ parts, which we denote by colors.
That is:

the integers in the first part are said to be colored $c_1$
the integers in the second part are said to be colored $c_2$
and so on till color $c_r$.
Thus $\set {1, \ldots, S}$ has been $r$-colored.
(This terminology is common in Ramsey theory.)

Now consider the complete graph $K_n$.
Now color the edges of $K_n$ as follows:

An edge $xy$ is given color $c$ if $\size {x - y}$ was colored $c$ in the partitioning.

This article, or a section of it, needs explaining.In particular: When the page defining a "coloring" of a partition is written, make sure that the links are assigned appropriately from the two difference senses of "coloring" in the above.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

From the definition of $\map R {3, \ldots, 3}$ and Ramsey's Theorem, $K_n$ will definitely contain a monochromatic triangle, say built out of the vertices $i > j > k$.
Let the triangle be colored $c_m$.
Now $i - j$, $i - k$ and $j - k$ will also be colored $c_m$.
That is, $i - j$, $i - k$ and $j - k$ will belong to the same part in the partition.
It only remains to take $x = i - j$, $y = j - k$ and $z = i - k$ to complete the proof.
$\blacksquare$


An extension

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: This section needs to be removed and put into an appropriate place. Its writer is encouraged to learn the basic house style and its implementation.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
The above proving technique allows to obtain a variety of similar and further going results. Here is just a sample:
THEOREM 1
Let $r$ be a positive integer.
Then there exists a positive integer $S$ such that:

for every partition of the integers $\set {1, \ldots, S}$ into $r$ parts, one of the parts contains integers $x$, $y$ and $z$ such that:
$x + y = z$
and:
$x \ne y$

This theorem follows from the following one:
THEOREM 2
Let $r$ be a positive integer.
Then there exists a positive integer $S$ such that:
for every partition of the integers $\set {1, \ldots, S}$ into $r$ parts, one of the parts contains integers $a$, $b$, $a + b$, $c$, $b + c$, and $d$ such that:

$a + b + c = d$
PROOF
The proof is nearly the same as of the original Schur's theorem above, except that one uses $\map R {4, \ldots, 4}$.
$\blacksquare$


Source of Name
This entry was named for Issai Schur.





