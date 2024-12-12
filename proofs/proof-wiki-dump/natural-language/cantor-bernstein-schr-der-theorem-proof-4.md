# 

Source: https://proofwiki.org/wiki/Cantor-Bernstein-Schr%C3%B6der_Theorem/Proof_4



Theorem
If a subset of one set is equivalent to the other, and a subset of the other is equivalent to the first, then the two sets are themselves equivalent:

$\forall S, T: T \sim S_1 \subseteq S \land S \sim T_1 \subseteq T \implies S \sim T$


Proof

The validity of the material on this page is questionable.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

From the facts that $T \sim S_1$ and $S \sim T_1$, we can set up the two injections:

$f \sqbrk S = T_1 \subseteq T$
$g \sqbrk T = S_1 \subseteq S$

Using $f$ and $g$, $S$ and $T$ are divided into disjoint subsets such that there exists a bijection between the subsets of $S$ and those of $T$, as follows.

Let $a \in S$.
Then we define the elements of $S$:

$\ldots, a_{-2 n}, \ldots, a_{-2}, a_0, a_2, \ldots, a_{2 n}, \ldots$
and the elements of $T$:

$\ldots, a_{-2 n + 1}, \ldots, a_{-1}, a_1, \ldots, a_{2 n - 1}, \ldots$
recursively as follows:

Let:














\(\ds a_0\)

\(=\)







\(\ds a\)




















\(\ds a_1\)

\(=\)







\(\ds \map f {a_0}\)




















\(\ds a_2\)

\(=\)







\(\ds \map g {a_1}\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds a_{2 n - 1}\)

\(=\)







\(\ds \map f {a_{2 n - 2} }\)




















\(\ds a_{2 n}\)

\(=\)







\(\ds \map g {a_{2 n - 1} }\)




















\(\ds \)

\(\vdots\)







\(\ds \)









This construction is valid for all $n \ge 1$, but note that some of the $a_n$'s may coincide with others.
We set up a similar construction for negative integers:














\(\ds a_{-1}\)

\(=\)







\(\ds \map {g^{-1} } {a_0}\)





if such an element exists in $T$














\(\ds a_{-2}\)

\(=\)







\(\ds \map {f^{-1} } {a_{-1} }\)





if such an element exists in $S$














\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds a_{-2 n + 1}\)

\(=\)







\(\ds \map {g^{-1} } {a_{-2 n + 2} }\)





if such an element exists in $T$














\(\ds a_{2 n}\)

\(=\)







\(\ds \map {f^{-1} } {a_{-2 n + 1} }\)





if such an element exists in $S$














\(\ds \)

\(\vdots\)







\(\ds \)









As $f$ and $g$ are injections, it follows that if $\map {f^{-1} } x$ and $\map {g^{-1} } y$ exist for any $x \in T$, $y \in S$, then those elements are unique.

Let:

the elements of $S$ with an even index be denoted $\sqbrk a_S$
and

the elements of $T$ with an odd index be denoted $\sqbrk a_T$
that is:














\(\ds \sqbrk a_S\)

\(=\)







\(\ds \set {\ldots, a_{-2 n}, \ldots, a_{-2}, a_0, a_2, \ldots, a_{2 n}, \ldots} \subseteq S\)




















\(\ds \sqbrk a_T\)

\(=\)







\(\ds \set {\ldots, a_{-2 n + 1}, \ldots, a_{-1}, a_1, \ldots, a_{2 n - 1}, \ldots} \subseteq T\)










We are given that $f$ and $g$ are injections.
So by the definition of $\sqbrk a_S$, for any two $a, b \in S$, $\sqbrk a_S$ and $\sqbrk b_S$ are either disjoint or equal.
The same applies to $\sqbrk a_T$ and $\sqbrk b_T$ for any $a, b \in T$.
It follows that:

$\AA_S = \set {\sqbrk a_S: a \in S}$ is a partition of $S$
and 

$\AA_T = \set {\sqbrk a_T: a \in S}$ is a partition of $T$.
So:

every element of $S$ belongs to exactly one element of $\AA_S$
and:

every element of $T$ belongs to exactly one element of $\AA_T$.
So let $a \in S$ and $b \in T$ such that $\map f a = b$.
It follows that a bijection can be constructed from $\AA_S$ to $\AA_T$.

Now there are two different kinds of $\sqbrk a_S$ sets:

$(1):$ It is possible that no repetition occurs in the sequence $\sequence {a_{2 n} }$.
As a consequence, no repetition occurs in the sequence $\sequence {a_{2 n - 1} }$ either.
By the method of construction it can be seen that $\sqbrk a_S$ and $\sqbrk a_T$ are both countably infinite.
So a bijection can be constructed between $\sqbrk a_S$ and $\sqbrk a_T$.


$(2):$ There may be a repetition in $\sqbrk a_S$.
Suppose such a repetition is $a_{2 m} = a_{2 n}$ for some $m \ne n$.
Then $a_{2 m + 1} = a_{2 n + 1}$ and $a_{2 m + 2} = a_{2 n + 2}$ and so on.
In general $a_{2 m + k} = a_{2 n + k}$ for all $k \in \N$.
But because $f$ and $g$ are injections it follows that $a_{2 m - 1} = a_{2 n - 1}$ and $a_{2 m - 2} = a_{2 n - 2}$ and so on, where they exist.
So in general $a_{2 m - k} = a_{2 n - k}$ for all $k \in \N$, where they exist.
Given $m$, we can choose $n$ so that the elements $a_{2 m}, a_{2 m + 2}, \ldots, a_{2 n - 2}$ are distinct.
Then $a_{2 m + 1}, a_{2 m + 3}, \ldots, a_{2 n - 1}$ are likewise distinct elements of $T$.
Thus we can set up a bijection:

$a_{2 m} \mapsto a_{2 m + 1}, a_{2 m + 2} \mapsto a_{2 m + 3}, \ldots, a_{2 n - 2} \mapsto a_{2 n - 1}$
between the elements of $\sqbrk a_S$ and $\sqbrk a_T$.

It follows that a bijection can be constructed between any two elements of the partitions of $S$ and $T$.
These maps then automatically yield a bijection from $S$ to $T$.
Hence the result.
$\blacksquare$


Source of Name
This entry was named for Georg Cantor, Felix Bernstein and Friedrich Wilhelm Karl Ernst Schröder.


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $2$. Set Theoretical Equivalence and Denumerability




