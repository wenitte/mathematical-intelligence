# 

Source: https://proofwiki.org/wiki/Closed_Convex_Set_in_terms_of_Bounded_Linear_Functionals

Theorem
Let $X$ be a normed vector space over $\R$.
Let $X^\ast$ be the normed dual of $X$. 
Let $C$ be a closed convex subset of $X$.

Then: 

$\ds C = \bigcap_{f \in X^\ast} \set {x \in X : \map f x \le \sup_{c \in C} \map f c}$


Proof

This needs considerable tedious hard slog to complete it.In particular: A few of these links only apply to finite sups/infs so will need to be replaced. they remain as placeholdersTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Clearly if $x \in C$ then: 

$\ds \map f x \le \sup_{c \in C} \map f c$
for all $f \in X^\ast$, by the definition of supremum.
That is: 

$\ds C \subseteq \bigcap_{f \in X^\ast} \set {x \in X : \map f x \le \sup_{c \in C} \map f c}$
To show that: 

$\ds \bigcap_{f \in X^\ast} \set {x \in X : \map f x \le \sup_{c \in C} \map f c} \subseteq C$
we prove that if $x_0 \not \in C$ then: 

$\ds x_0 \not \in \bigcap_{f \in X^\ast} \set {x \in X : \map f x \le \sup_{c \in C} \map f c}$
The Rule of Transposition will then give us the result. 
Let $x_0 \not \in C$.
From Finite Topological Space is Compact, we have that $\set {x_0}$ is compact. 
Clearly $\set {x_0}$ is disjoint from $C$. 
We can therefore apply Hahn-Banach Separation Theorem: Compact Convex Set and Closed Convex Set, which gives the existence of $f \in X^\ast$, $c \in \R$ and $\epsilon > 0$ such that: 

$\map f {x_0} \le c - \epsilon < c + \epsilon \le \map f x$ for each $x \in C$.
From the definition of infimum, we therefore have: 

$\ds c + \epsilon \le \inf_{x \in C} \map f x$
so that: 

$\ds \map f {x_0} \le c - \epsilon < c + \epsilon \le \inf_{x \in C} \map f x$
Then, from Negative of Supremum is Infimum of Negatives, we have:

$\ds -\map f {x_0} \ge \epsilon - c > -\paren {c + \epsilon} \ge \sup_{x \in C} \paren {-\map f x}$
Setting $g = -f \in X^\ast$ we have: 

$\ds \map g {x_0} > \sup_{x \in C} \map g x$
So:

$\ds x_0 \not \in \bigcap_{f \in X^\ast} \set {x \in X : \map f x \le \sup_{c \in C} \map f c}$
as required.
Hence we obtain: 

$\ds \bigcap_{f \in X^\ast} \set {x \in X : \map f x \le \sup_{c \in C} \map f c} \subseteq C$
and:

$\ds C = \bigcap_{f \in X^\ast} \set {x \in X : \map f x \le \sup_{c \in C} \map f c}$
$\blacksquare$





