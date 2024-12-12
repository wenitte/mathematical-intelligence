# 

Source: https://proofwiki.org/wiki/Closed_Unit_Interval_is_Homeomorphic_to_Letter_L

Theorem
Let $\R$ be the real number line under the Euclidean metric.
Let $\Bbb I := \closedint 0 1$ be the closed unit interval.
Let $\mathsf L \subseteq \R^2$ denote the letter $L$:

$\mathsf L := \closedint 0 1 \times \set 0 \cup \set 0 \times \closedint 0 1$

Then $\Bbb I$ and $\mathsf L$ are homeomorphic.


Proof
  
Consider the mapping $f: \Bbb I \to \mathsf L$ defined as:

$\forall x \in \Bbb I: \map f x = \begin {cases} \tuple {0, 1 - 2 x} & : x \in \closedint 0 {\dfrac 1 2} \\ \tuple {2 x - 1, 0} & : x \in \closedint {\dfrac 1 2} 1 \end {cases}$
It is seen that:

$f \closedint 0 {\dfrac 1 2} = \set 0 \times \closedint 0 1$
and:

$f \closedint {\dfrac 1 2} 1 = \closedint 0 1 \times \set 0$
such that:

$\map f {\dfrac 1 2} = \tuple {0, 0}$
By construction, $f$ is a bijection.
Its continuity follows from the Combination Theorem for Continuous Real Functions.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.6$: Homeomorphisms: Examples $3.6.2 \ \text{(c)}$




