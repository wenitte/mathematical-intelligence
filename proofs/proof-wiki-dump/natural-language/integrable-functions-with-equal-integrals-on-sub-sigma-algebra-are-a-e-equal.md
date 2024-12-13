# 

Source: https://proofwiki.org/wiki/Integrable_Functions_with_Equal_Integrals_on_Sub-Sigma-Algebra_are_A.E._Equal



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\GG$ be a sub-$\sigma$-algebra of $\Sigma$.

Let $f, g: X \to \overline \R$ be $\GG$-integrable functions.
Suppose that, for all $G \in \GG$:

$\ds \int_G f \rd \mu = \int_G g \rd \mu$

Then $f = g$ $\mu$-almost everywhere.


Proof
Define: 

$A = \set {x \in X : \map f x \in \R}$
and:

$B = \set {x \in X : \map g x \in \R}$
From Set of Points for which Measurable Function is Real-Valued is Measurable, we have that: 

$A$ and $B$ are $\GG$-measurable.
From Sigma-Algebra Closed under Countable Intersection, we have that: 

$A \cap B$ is $\GG$-measurable.

Consider the characteristic function $\chi_{A \cap B}$. 
From Characteristic Function Measurable iff Set Measurable, we have that: 

$\chi_{A \cap B}$ is $\GG$-measurable.
From De Morgan's Laws: Complement of Intersection, we have

$X \setminus \paren {A \cap B} = \paren {X \setminus A} \cup \paren {X \setminus B}$
We have that: 

$X \setminus A = \set {x \in X : \size {\map f x} = +\infty}$
and:

$X \setminus B = \set {x \in X : \size {\map f x} = +\infty}$
From Integrable Function is A.E. Real-Valued, we have that: 

$X \setminus A$ and $X \setminus B$ are $\mu$-null.
From Null Sets Closed under Countable Union, we then have that: 

$\paren {X \setminus A} \cup \paren {X \setminus B}$ is $\mu$-null.
Let $G \in \GG$. 
Note that if $x \in X$ is such that: 

$\map f x \map {\chi_G} x \map {\chi_{A \cap B} } x \ne \map f x \map {\chi_G} x$
Then: 

$\map {\chi_{A \cap B} } x = 0$
so:

$x \in X \setminus \paren {A \cap B}$
so:

$x \in \paren {X \setminus A} \cup \paren {X \setminus B}$
Giving:

$f \cdot \chi_G \cdot \chi_{A \cap B} = f \cdot \chi_G$ $\mu$-almost everywhere.
Swapping $f$ for $g$, we also obtain:

$g \cdot \chi_G \cdot \chi_{A \cap B} = g \cdot \chi_G$ $\mu$-almost everywhere.
Additionally, from Pointwise Product of Measurable Functions is Measurable, we have that: 

$f \cdot \chi_G \cdot \chi_{A \cap B}$ and $g \cdot \chi_G \cdot \chi_{A \cap B}$ are $\GG$-measurable for each $G \in \GG$.
By hypothesis, we have that: 

$\ds \int_G f \rd \mu = \int_G g \rd \mu$
for each $G \in \GG$, so:

$\ds \int f \cdot \chi_G \rd \mu = \int g \cdot \chi_G \rd \mu$
Then from A.E. Equal Positive Measurable Functions have Equal Integrals, we have: 

$\ds \int f \cdot \chi_G \cdot \chi_{A \cap B} \rd \mu = \int g \cdot \chi_G \cdot \chi_{A \cap B} \rd \mu$
so:

$\ds \int_G f \cdot \chi_{A \cap B} \rd \mu = \int_G g \cdot \chi_{A \cap B} \rd \mu$
for each $G \in \GG$. 
That is: 

$\ds \int_G \paren {f \cdot \chi_{A \cap B} - g \cdot \chi_{A \cap B} } \rd \mu = 0$
for each $G \in \GG$. 
Then, from Integrable Function with Zero Integral on Sub-Sigma-Algebra is A.E. Zero, we have that: 

$f \cdot \chi_{A \cap B} - g \cdot \chi_{A \cap B} = 0$ $\mu$-almost everywhere.
That is: 

$f \cdot \chi_{A \cap B} = g \cdot \chi_{A \cap B}$ $\mu$-almost everywhere.
So, if $x \in X$ is such that $\map f x \ne \map g x$, we must have: 

$\map {\chi_{A \cap B} } x = 0$
That is: 

$x \in X \setminus \paren {A \cap B}$
and:

$X \setminus \paren {A \cap B}$ is a $\mu$-null set.
So:

$f = g$ $\mu$-almost everywhere.
$\blacksquare$


Note
It may be tempting to write that: 

$\ds \int_G \paren {f - g} \rd \mu = 0$
for each $G \in \GG$, and conclude immediately from  Integrable Function with Zero Integral on Sub-Sigma-Algebra is A.E. Zero.
However, the pointwise difference $f - g$ may not be well-defined. 
For example, if there is a point $x \in X$ such that $\map f x = \map g x = +\infty$. 
We avoid this technicality by introducing the sets $A$ and $B$, as subtraction is well-understood on $A \cap B$. 
We write $f \cdot \chi_{A \cap B} - g \cdot \chi_{A \cap B}$ instead of $\paren {f - g} \cdot \chi_{A \cap B}$ for this reason. 


Also see
Measurable Functions with Equal Integrals on Sub-Sigma-Algebra are A.E. Equal


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $10.14 \ \text{(i)}$




