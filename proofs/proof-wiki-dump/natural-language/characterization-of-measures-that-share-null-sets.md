# 

Source: https://proofwiki.org/wiki/Characterization_of_Measures_that_Share_Null_Sets



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ and $\nu$ be $\sigma$-finite measures on $\struct {X, \Sigma}$.

The following statements are equivalent:

$(1) \quad$ $\nu \ll \mu$ and $\mu \ll \nu$, where $\ll$ denotes absolute continuity
$(2) \quad$ $A \in \Sigma$ is a $\mu$-null set if and only if it is a $\nu$-null set
$(3) \quad$ there exists a positive $\Sigma$-measurable function $g : X \to \R$ such that:
$\ds \map \nu A = \int_A g \rd \mu$
for each $A \in \Sigma$.


Proof
$(1)$ implies $(2)$
Suppose that $\nu \ll \mu$ and $\mu \ll \nu$. 
Let $A \in \Sigma$ have $\map \mu A = 0$.
Then, since $\nu \ll \mu$, we have $\map \nu A = 0$ from the definition of absolute continuity.
So if a $\Sigma$-measurable set is $\mu$-null, it is $\nu$-null.
Similarly, let $B \in \Sigma$ have $\map \nu B = 0$.
Then, since $\mu \ll \nu$, we have $\map \mu B = 0$ from the definition of absolute continuity.
So if a $\Sigma$-measurable set is $\nu$-null, it is $\mu$-null.
So a $\Sigma$-measurable set is $\nu$-null if and only if it is $\mu$-null.
Hence $(2)$.
$\Box$

$(2)$ implies $(1)$
Suppose $A \in \Sigma$ is a $\mu$-null set if and only if it is a $\nu$-null set.
Then $A \in \Sigma$ has $\map \nu A = 0$ if and only if it has $\map \mu A = 0$.
In particular, if $A \in \Sigma$ has $\map \nu A = 0$, then it has $\map \mu A = 0$, so $\nu \ll \mu$.
Similarly, if $A \in \Sigma$ has $\map \mu A = 0$ then it has $\map \nu A = 0$ so $\mu \ll \nu$.
So $\nu \ll \mu$ and $\mu \ll \nu$, hence $(1)$.
$\Box$

$(3)$ implies $(2)$
Suppose there existed a positive $\Sigma$-measurable function $g : X \to \R$ such that: 

$\ds \map \nu A = \int_A g \rd \mu$
for each $A \in \Sigma$.
Let $A \in \Sigma$ be a $\mu$-null set. 
Then, from Integral of Integrable Function over Null Set, we have: 

$\ds \int_N g \rd \mu = 0$
so:

$\map \nu A = 0$
So $\nu \ll \mu$.
Now let $A \in \Sigma$ be a $\nu$-null set.
Suppose that $A$ is not a $\mu$-null set, then:

$\map \mu A > 0$
We have: 

$\ds \int_A g \rd \mu = 0$
That is: 

$\ds \int g \chi_A \rd \mu = 0$
From Measurable Function Zero A.E. iff Absolute Value has Zero Integral, we have: 

$\map g x \map {\chi_A} x = 0$ for $\mu$-almost every $x \in X$.
But $\map {\chi_A} x = 1$ for $x \in A$, so we must have $\map g x = 0$ for $x \in A$.
We have that $\map \mu \O = 0$ from Empty Set is Null Set, while $\map \mu A > 0$.
So we cannot have that $A = \O$.
This contradicts that $\map g x > 0$ for all $x \in X$.
So we must have $\map \mu A = 0$. 
$\Box$

$(2)$ implies $(3)$
Suppose that $\mu \ll \nu$ and $\nu \ll \mu$. 
From the Radon-Nikodym Theorem, we have that there exists a $\Sigma$-measurable function $g : X \to \hointr 0 \infty$ such that: 

$\ds \map \nu A = \int_A g \rd \mu$
for each $A \in \Sigma$.
Note that this is not sufficient, since we may have $\map g x = 0$ for some $x \in X$.
We show that we have $\map g x > 0$ for $\mu$-almost every $x \in X$ so that we can modify the values of $g$ unproblematically.
Suppose that there exists $A \in \Sigma$ such that $\map \mu A > 0$ but $\map g x = 0$ for each $x \in A$.
Then we have that $\map g x \map {\chi_A} x = 0$ for all $x \in X$, and so: 

$\ds \int g \chi_A \rd \mu = 0$
But then: 

$\ds \int_A g \rd \mu = 0$
giving: 

$\map \nu A = 0$
So $A$ is a $\nu$-null set that is not $\mu$-null.
This contradicts the hypothesis that $\mu \ll \nu$. 
So there cannot exist an $A \in \Sigma$ such that $\map \mu A > 0$ but $\map g x = 0$ for each $x \in A$.
So, if $A \in \Sigma$ has $\map g x = 0$ for all $A \in \Sigma$, then we have $\map \mu A = 0$.
From Measurable Functions Determine Measurable Sets, we have: 

$\set {x \in X : \map g x = 0} \in \Sigma$
From what we have just shown we therefore have: 

$\map \mu {\set {x \in X : \map g x = 0} } = 0$
Write: 

$N = \set {x \in X : \map g x = 0}$
Note that $N$ may be empty.
Define $g^\ast : X \to \openint 0 \infty$ by: 

$\ds \map {g^\ast} x = \map g x + \map {\chi_N} x = \begin{cases}\map g x & x \not \in N \\ 1 & x \in N\end{cases}$
for each $x \in X$. 
From Characteristic Function Measurable iff Set Measurable:

$\chi_N$ is $\Sigma$-measurable.
So from Pointwise Sum of Measurable Functions is Measurable:

$g^\ast$ is $\Sigma$-measurable.
From Characteristic Function of Null Set is A.E. Equal to Zero, we have: 

$g^\ast = g$ $\mu$-almost everywhere.
So, from A.E. Equal Positive Measurable Functions have Equal Integrals: Corollary 2, we have: 

$\ds \int_A g^\ast \rd \mu = \int_A g \rd \mu = \map \nu A$
for each $A \in \Sigma$.
So $g^\ast$ is the $\Sigma$-measurable function required.
$\blacksquare$





