# 

Source: https://proofwiki.org/wiki/Product_of_Coprime_Ideals_equals_Intersection



Theorem
Let $A$ be a commutative ring with unity.
Let $\mathfrak a, \mathfrak b \subseteq A$ be coprime ideals.

Then their product equals their intersection:

$\mathfrak a \mathfrak b = \mathfrak a \cap \mathfrak b$


Proof
By Intersection of Ideals of Ring contains Product:

$\mathfrak a \mathfrak b \subseteq \mathfrak a \cap \mathfrak b$
It remains to show that $\mathfrak a \mathfrak b \supseteq \mathfrak a \cap \mathfrak b$.
Let $c \in \mathfrak a \cap \mathfrak b$.
Because $\mathfrak a$ and $\mathfrak b$ are coprime, there exist $x \in \mathfrak a$, $y \in \mathfrak b$ with $x + y = 1$.
Then:

$c = c x + c y$
Because:

$c \in \mathfrak b$ and $x \in \mathfrak a$
$c \in \mathfrak a$ and $y \in \mathfrak b$
we have:

$c \in \mathfrak a \mathfrak b$
$\blacksquare$

Converse theorem

This page has been identified as a candidate for refactoring of basic complexity.In particular: Separate page for thisUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
In a Dedekind domain, the conditions

$\mathfrak a + \mathfrak b = \ideal 1$
and

$\mathfrak a \cap \mathfrak b = \mathfrak a \mathfrak b$
are equivalent, both expressing the fact that $\mathfrak a$ and $\mathfrak b$ have no common ideal factors except $\ideal 1$.
In a general commutative ring with unity, these conditions are not equivalent.
For example, in the polynomial ring $\Z\sqbrk T$ we have

$\ideal 2 + \ideal T = \ideal {2, T} \ne \ideal 1$
but

$\ideal 2 \cap \ideal T = \ideal {2T} = \ideal 2 \ideal T$
Sources
2005: Serge Lang: Undergraduate Algebra (3rd ed.): Chapter $\text {III}$, $\S 3$ Exercises: Problem $12  \ \text{(b)}$




