# 

Source: https://proofwiki.org/wiki/Periodic_Function_as_Mapping_from_Unit_Circle



Theorem
Let $\SS$ denote the unit circle whose center is at the origin of the Cartesian plane $\R^2$.
Let $p: \R \to \SS$ be the mapping defined as:

$\forall x \in \R: \map p x = \tuple {\cos x, \sin x}$

Let $f: \R \to \R$ be a periodic real function whose period is $2 \pi$.

Then there exists a well-defined real-valued function $f': \SS \to \R$ such that:

$f = f' \circ p$
where $f' \circ p$ denotes the composition of $f'$ with $p$.


Proof
Let $f': \SS \to \R$ be defined as:

$\forall \tuple {x, y} \in \SS: \map {f'} {x, y} = \map f x$

Consider the inverse $p^{-1}: \SS \to \R$ of $p$:

$\forall \tuple {x', y'} \in \SS: p^{-1} \sqbrk {x', y'} = \set {x \in \R: \cos x = x', \sin x = y'}$
Let $\RR$ be the equivalence relation on $\R$ induced by $p$:

$\forall \tuple {x, y} \in \R \times \R: \tuple {x, y} \in \RR \iff \map p x = \map p y$
That is:










\(\ds \forall \tuple {x, y} \in \R \times \R: \, \)



\(\ds \tuple {x, y} \in \RR\)

\(\iff\)







\(\ds \map p x = \map p y\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y} \in \RR\)

\(\iff\)







\(\ds \tuple {\cos x, \sin x} = \tuple {\cos y, \sin y}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y} \in \RR\)

\(\iff\)







\(\ds x = y + 2 k \pi\)










Let $f'$ be defined as:

$f' = f \circ p^{-1}$
Then by the Quotient Theorem for Sets:

$f'$ is well-defined if and only if $f$ is periodic with period $2 \pi$.

It follows from Conditions for Commutative Diagram on Quotient Mappings between Mappings that $f$ and $f'$ are related by the commutative diagram:

$\begin{xy} \xymatrix@L+2mu@+1em{
 \R \ar[r]^*{p}
     \ar@{-->}[rd]_*{f := f' \circ p}
&
 \SS \ar[d]^*{f'}
\\ &
 \R
}\end{xy}$
$\blacksquare$


Motivation
By this technique, the study of continuous periodic real functions on $\R$ can be reduced to the study of continuous real functions on the unit circle $\SS$.


Also see
Mapping from Unit Circle defines Periodic Function
Periodic Function is Continuous iff Mapping from Unit Circle is Continuous
Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.8$: Quotient spaces




