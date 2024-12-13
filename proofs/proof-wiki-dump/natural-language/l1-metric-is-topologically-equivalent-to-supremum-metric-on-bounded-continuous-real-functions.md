# 

Source: https://proofwiki.org/wiki/L1_Metric_is_Topologically_Equivalent_to_Supremum_Metric_on_Bounded_Continuous_Real_Functions

Theorem
Let $\FF$ be the set of all real functions which are also bounded on the closed interval $\closedint a b$.
Let $d: \FF \times \FF \to \R$ be the $L^1$ metric on $\closedint a b$:

$\ds \forall f, g \in \FF: \map d {f, g} := \int_a^b \size {\map f t - \map g t} \rd t$
Let $d': \FF \times \FF \to \R$ be the supremum metric on $\closedint a b$:

$\ds \forall f, g \in \FF: \map {d'} {f, g} := \sup_{x \mathop \in S} \size {\map f x - \map g x}$

Then $d$ and $d'$ are topologically equivalent metrics.


Proof
Let $U$ be an upper bound of $\set {\size {\map f x - \map g x} }$.
Then:

$\ds U \ge \sup_{x \mathop \in S} \size {\map f x - \map g x}$
Hence:

$\ds \max_{x \mathop \in \closedint a b} \set {\size {\map f x - \map g x} } = \map {d'} {f, g}$
Then:














\(\ds \map d {f, g}\)

\(=\)







\(\ds \int_a^b \size {\map f t - \map g t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \lim_{\Delta h \mathop \to 0} \sum_{i \mathop = i}^n \size {\map f t - \map g t} \Delta h\)




















\(\ds \)

\(\le\)







\(\ds \lim_{\Delta h \mathop \to 0} \sum_{i \mathop = i}^n \map {d'} {f, g} \Delta h\)




















\(\ds \)

\(=\)







\(\ds \map {d'} {f, g} \int_a^b \rd t\)




















\(\ds \)

\(=\)







\(\ds \paren {b - a} \map {d'} {f, g}\)














\(\ds \leadsto \ \ \)





\(\ds \map d {f, g}\)

\(\le\)







\(\ds \paren {b - a} \map {d'} {f, g}\)









$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 2$: Metric Spaces: Exercise $6$




