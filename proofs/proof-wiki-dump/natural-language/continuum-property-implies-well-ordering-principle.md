# 

Source: https://proofwiki.org/wiki/Continuum_Property_implies_Well-Ordering_Principle

Theorem
The Continuum Property of the positive real numbers $\R_{\ge 0}$ implies the Well-Ordering Principle of the natural numbers $\N$.


Proof
Suppose that the set of positive real numbers $\R_{\ge 0}$ has the Continuum Property.

Aiming for a contradiction, suppose $T \subseteq \N$ is a subset of $\N$ which has no smallest element.
Then:

$\forall t \in T: \exists u \in T: u < t$

Let $A \in \R_{\ge 0}$.
For every $t \in T$, let $a_t = \dfrac A {2^t}$.
We have that $t \in \N$, so $t \ge 0$.
Therefore $2^t \ge 1$.
This $a_t$ can never be greater than $A$.
Therefore $\set {a_t: t \in T}$ has an upper bound.
As $\R_{\ge 0}$ has the Continuum Property, it follows that $\set {a_t: t \in T}$ has a supremum $B$.
We have that $\dfrac {7 B} 8 < B$.
Thus $\dfrac {7 B} 8$ is not an upper bound of $\set {a_t: t \in T}$.
Therefore there exists $m \in T$ such that:

$a_m > \dfrac {7 B} 8$
Then there is $n \in T$ such that $n < m$. 
Let $n = m - p$. 
Then:














\(\ds a_n\)

\(=\)







\(\ds \dfrac A {2^n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac A {2^{m - p} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {A \cdot 2^p} {2^m}\)




















\(\ds \)

\(\ge\)







\(\ds \dfrac {A \cdot 2} {2^m}\)




















\(\ds \)

\(=\)







\(\ds 2 \cdot a_m\)




















\(\ds \)

\(>\)







\(\ds 2 \cdot \dfrac {7B} 8\)




















\(\ds \)

\(=\)







\(\ds \dfrac {7B} 4\)




















\(\ds \)

\(>\)







\(\ds B\)









Therefore $a_n > B$.
This contradicts the supposition that $B$ is the supremum of $\set {a_t: t \in T}$
Thus our initial supposition that $T \subseteq \N$ has no smallest element was false.
As $T$ is arbitrary, it follows that each $T \subseteq \N$ has a smallest element.
Thus the Well-Ordering Principle holds for $\N$, as was to be proved.
$\blacksquare$


Also see
Equivalence of Well-Ordering Principle and Induction




