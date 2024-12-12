# 

Source: https://proofwiki.org/wiki/Characterization_of_Null_Sets_of_Variation_of_Complex_Measure

Theorem
Let $\struct {X, \Sigma}$ be measurable space.
Let $\mu$ be a complex measure on $\struct {X, \Sigma}$. 
Let $\size \mu$ be the variation of $\mu$. 

Then $A \in \Sigma$ is such that $\map {\size \mu} A = 0$ if and only if:

for each $\Sigma$-measurable set $B \subseteq A$, we have $\map \mu B = 0$.


Proof
Let $A \in \Sigma$.
Let $\map P A$ be the set of finite partitions of $A$ into $\Sigma$-measurable sets.
From the definition of variation, we have:

$\ds \map {\cmod \mu} A = \sup \set {\sum_{j \mathop = 1}^n \cmod {\map \mu {A_j} } : \set {A_1, A_2, \ldots, A_n} \in \map P A}$

Suppose that: 

for each $\Sigma$-measurable set $B \subseteq A$, we have $\map \mu B = 0$.
Then, for any: 

$\set {A_1, A_2, \ldots, A_n} \in \map P A$
we have: 

$\map \mu {A_i} = 0$ for each $i$
so:

$\ds \sum_{i \mathop = 1}^n \cmod {\map \mu {A_i} } = 0$
This gives: 

$\ds \set {\sum_{j \mathop = 1}^n \cmod {\map \mu {A_j} } : \set {A_1, A_2, \ldots, A_n} \in \map P A} = \set 0$
So, from the definition of supremum, we have: 

$\ds \sup \set {\sum_{j \mathop = 1}^n \cmod {\map \mu {A_j} } : \set {A_1, A_2, \ldots, A_n} \in \map P A} = 0$
so:

$\map {\cmod \mu} A = 0$
$\Box$

Suppose that:

$\map {\cmod \mu} A = 0$
Then: 

$\ds \sup \set {\sum_{j \mathop = 1}^n \cmod {\map \mu {A_j} } : \set {A_1, A_2, \ldots, A_n} \in \map P A} = 0$
Note that since each element of: 

$\ds \set {\sum_{j \mathop = 1}^n \cmod {\map \mu {A_j} } : \set {A_1, A_2, \ldots, A_n} \in \map P A}$
is non-negative, we must have: 

$\ds \set {\sum_{j \mathop = 1}^n \cmod {\map \mu {A_j} } : \set {A_1, A_2, \ldots, A_n} \in \map P A} = \set 0$
So, for all:

$\set {A_1, A_2, \ldots, A_n} \in \map P A$
we have: 

$\ds \sum_{i \mathop = 1}^n \cmod {\map \mu {A_i} } = 0$
Let $B \subseteq A$ be $\Sigma$-measurable.
From Sigma-Algebra Closed under Set Difference, we have: 

$A \setminus B$ is $\Sigma$-measurable.
We also have: 

$A = B \cup \paren {A \setminus B}$
so:

$\set {B, A \setminus B}$ is a finite partition of $A$ into $\Sigma$-measurable sets.
That is: 

$\set {B, A \setminus B} \in \map P A$
We therefore have: 

$\cmod {\map \mu B} + \cmod {\map \mu {A \setminus B} } = 0$
Since: 

$\cmod {\map \mu {A \setminus B} } \ge 0$
and:

$\cmod {\map \mu B} \ge 0$
we must have: 

$\cmod {\map \mu B} = \cmod {\map \mu {A \setminus B} } = 0$
and in particular: 

$\map \mu B = 0$
So:

for each $\Sigma$-measurable set $B \subseteq A$, we have $\map \mu B = 0$.
$\blacksquare$





