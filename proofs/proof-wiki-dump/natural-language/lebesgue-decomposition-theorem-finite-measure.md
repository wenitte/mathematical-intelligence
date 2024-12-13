# 

Source: https://proofwiki.org/wiki/Lebesgue_Decomposition_Theorem/Finite_Measure

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a measure on $\struct {X, \Sigma}$. 
Let $\nu$ be a finite measure on $\struct {X, \Sigma}$. 

Then there exist finite measures $\nu_a$ and $\nu_s$ on $\struct {X, \Sigma}$ such that: 

$(1): \quad \nu_a$ is absolutely continuous with respect to $\mu$
$(2): \quad \nu_s$ and $\mu$ are mutually singular
$(3): \quad \nu = \nu_a + \nu_s$


Proof
Define the set $\NN_\mu$ by: 

$\NN_\mu = \set {B \in \Sigma : \map \mu B = 0}$
Since $\nu$ is a finite measure, there exists $M \ge 0$ such that: 

$\map \nu A \le M$
for all $A \in \Sigma$.
So by the Continuum Property:

the supremum of $\set {\map \nu B : B \in \NN_\mu}$ exists as a real number $L$.
By the definition of the supremum, for each $n \in \N$ there exists $B_n \in \NN_\mu$ such that: 

$L - \dfrac 1 n \le \map \nu {B_n} \le L$
Then, from the Squeeze Theorem:

$\ds \lim_{n \mathop \to \infty} \map \nu {B_n} = L$
Now set: 

$\ds N = \bigcup_{n \mathop = 1}^\infty B_n$
From Null Sets Closed under Countable Union, we have that: 

$N$ is $\mu$-null.
So:

$N \in \NN_\mu$
Further, from Set is Subset of Union, we have:

$B_n \subseteq N$ for each $N \in \N$
giving: 

$\map \nu {B_n} \le \map \nu N \le L$ for each $n \in \N$
from the definition of the supremum and Measure is Monotone. 
Taking $n \to \infty$, we obtain: 

$\map \nu N = L$
by Limits Preserve Inequalities. 
Explicitly, we have found that: 

$\map \nu N = \sup \set {\map \nu B : B \in \NN_\mu}$

Let $\nu_a$ be the intersection measure of $\nu$ by $N^c$.
Let $\nu_s$ be the intersection measure of $\nu$ by $N$.
Since $\nu$ is finite, so are $\nu_a$ and $\nu_s$ from Intersection Measure of Finite Measure is Finite Measure.
Then, for each $A \in \Sigma$ we have:














\(\ds \map \nu A\)

\(=\)







\(\ds \map \nu {\paren {A \cap N} \cup \paren {A \cap N^c} }\)




















\(\ds \)

\(=\)







\(\ds \map \nu {A \cap N} + \map \nu {A \cap N^c}\)





countable additivity of the measure $\nu$














\(\ds \)

\(=\)







\(\ds \map {\nu_a} A + \map {\nu_s} A\)









so:

$\nu = \nu_a + \nu_s$
verifying $(3)$.

We have: 














\(\ds \map {\nu_s} {N^c}\)

\(=\)







\(\ds \map \nu {N \cap N^c}\)




















\(\ds \)

\(=\)







\(\ds \map \nu \O\)




















\(\ds \)

\(=\)







\(\ds 0\)





Empty Set is Null Set



and $\map \mu N = 0$.
So $\nu_s$ is concentrated on $N$ and $\mu$ is concentrated on $N^c$.
So $\mu$ and $\nu_s$ are mutually singular, verifying $(2)$.
We finish by showing that $\nu_a$ is absolutely continuous with respect to $\mu$.
To simplify notation, first consider a $\Sigma$-measurable $B \subseteq N^c$ such that $\map \mu B = 0$.
That is, $B \in \NN_\mu$. 
Aiming for a contradiction, suppose that $\map \nu B \ne 0$.
In particular, $\map \nu B > 0$. 
Then, we have:














\(\ds \map \nu {N \cup B}\)

\(=\)







\(\ds \map \nu N + \map \mu B\)





since $N$ is disjoint from $B$














\(\ds \)

\(>\)







\(\ds \map \nu N\)









However, from Null Sets Closed under Countable Union, we have: 

$N \cup B$ is $\mu$-null.
So: 

$\map \nu {N \cup B} \in \set {\map \nu B : B \in \NN_\mu}$, contradicting that $\map \nu N$ is the supremum of this set.
So we must have $\map \nu B = 0$.
Now suppose that general $B \in \Sigma$ has $\map \mu B = 0$.
Then, from Intersection is Subset, we have: 

$B \cap N^c \subseteq B$
From Null Sets Closed under Subset, we have: 

$\map \mu {B \cap N^c} = 0$
while $B \cap N^c$ is a $\Sigma$-measurable subset of $N^c$, so: 

$\map \nu {B \cap N^c} = 0$
so:

$\map {\nu_a} B = 0$
So $\nu_a$ is absolutely continuous with respect to $\mu$.
Hence the result.
$\blacksquare$





