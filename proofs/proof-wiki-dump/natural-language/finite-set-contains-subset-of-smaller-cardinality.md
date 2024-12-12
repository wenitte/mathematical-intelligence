# 

Source: https://proofwiki.org/wiki/Finite_Set_Contains_Subset_of_Smaller_Cardinality



Theorem
Let $S$ be a finite sets.
Let

$\size S = n$
where $\size {\, \cdot \,}$ denotes cardinality.
Let $0 \le m \le n$.

Then there exists a subset $X \subseteq S$ such that:

$\size X = m$


Proof
Case 1
Let $m = n$. 
Then $X = S$ is a subset $X \subseteq S$ such that:

$\size X = m$
$\Box$


Case 2
Let $m = 0$. 
Then $X = \O$ is a subset $X \subseteq S$ such that:

$\size X = m$
$\Box$


Case 3
Let $0 < m < n$.
By definition of the cardinality of a finite set:

$S \sim \N_{< n}$
where:

$\sim$ denotes set equivalence
$\N_{<n}$ is the set of all natural numbers less than $n$

Consider the set of all natural numbers less than $m$, $\N_{< m}$.














\(\ds k\)

\(\in\)







\(\ds \N_{< m}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds k\)

\(<\)







\(\ds m\)





Definition of set of all natural numbers less than $m$








\(\ds \leadsto \ \ \)





\(\ds k\)

\(<\)







\(\ds n\)





As $m < n$ and the ordering on the natural numbers is transitive








\(\ds \leadstoandfrom \ \ \)





\(\ds k\)

\(\in\)







\(\ds \N_{< n}\)





Definition of set of all natural numbers less than $n$



By the definition of a subset:

$\N_{< m} \subseteq \N_{< n}$

Let $i : \N_{< m} \to \N_{< n}$ be the inclusion mapping.
Let $f : \N_{< n} \to S$ be a bijection between $\N_{< n}$ and $S$.
From Composite of Injections is Injection, the composite $f \circ i : \N_{< m} \to S$ is an injection.

Let $X = \Img {f \circ i}$ be the image of $f \circ i$.
By definition of the image of a mapping:

$X \subseteq S$
From Injection to Image is Bijection:

$\N_{< m} \sim X$
By definition of the cardinality of $X$:

$\size X = m$
$\blacksquare$


Also see
Cardinality of Subset of Finite Set




