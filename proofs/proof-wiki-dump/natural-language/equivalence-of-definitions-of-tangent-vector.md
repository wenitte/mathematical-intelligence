# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Tangent_Vector


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: Put lemmas on their own pages. Improve structure.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $M$ be a smooth manifold.
Let $m \in M$ be a point. 
Let $V$ be an open neighborhood of $m$. 
Let $\map {C^\infty} {V, \R}$ be defined as the set of all smooth mappings $f: V \to \R$.
The following definitions of the concept of Tangent Vector are equivalent:

Definition 1
A tangent vector $X_m$ on $M$ at $m$ is a linear transformation:

$X_m: \map {C^\infty} {V, \R} \to \R$
which satisfies the Leibniz law:

$\ds \map {X_m} {f g} = \map {X_m} f \map g m + \map f m \map {X_m} g$
Definition 2
Let $I$ be an open real interval with $0 \in I$. 
Let $\gamma: I \to M$ be a smooth curve with $\gamma \left({0}\right) = m$. 

Then a tangent vector $X_m$ at a point $m \in M$ is a mapping 

$X_m: \map {C^\infty} {V, \R} \to \R$
defined by:

$\map {X_m} f := \map {\dfrac \d {\d \tau} {\restriction_0} } {\map {f \circ \gamma} \tau}$
for all $f \in \map {C^\infty} {V, \R}$.


Proof
Definition 2 implies Definition 1
Let $\lambda \in \R$ and $f, g \in \map {C^\infty} {V, \R}$. 














\(\ds \map {X_m} {f + \lambda g}\)

\(=\)







\(\ds \map {\frac \d {\d \tau} {\restriction_0} } {\map {\paren {f + \lambda g} \circ \gamma} \tau}\)





Definition 2














\(\ds \)

\(=\)







\(\ds \map {\frac \d {\d \tau} {\restriction_0} } {\map {f \circ \gamma} \tau} + \lambda \map {\frac \d {\d \tau} {\restriction_0} } {\map {g \circ \gamma} \tau}\)




















\(\ds \)

\(=\)







\(\ds \map {X_m} f + \lambda \map {X_m} g\)









Thus $X_m$ is linear. 














\(\ds \map {X_m} {f g}\)

\(=\)







\(\ds \frac \d {\d \tau} {\restriction_0} \map {\paren {f g} \circ \gamma} \tau\)





Definition 2














\(\ds \)

\(=\)







\(\ds \frac \d {\d \tau} {\restriction_0} \map {f \circ \gamma} \tau \, \map {g \circ \gamma} 0 + \map {f \circ \gamma} 0 \, \frac \d {\d \tau} {\restriction_0} \map {g \circ \gamma} \tau\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \map {X_m} f \map g m + \map f m \map {X_m} g\)





Definition 2, $\map \gamma 0 = m$



Hence $X_m$ satisfies the Leibniz law. 
Thus $X_m$ satisfies Definition 1.
$\Box$


Definition 1 implies Definition 2
Lemma 1
Let $X_m$ be a tangent vector at $m \in M$ according to Definition 1. 
Let $V$ be an open neighborhood of $M$. 
Let $f \in \map {C^\infty} {V, \R}$ be constant. 

Then $\map {X_m} f = 0$.


Proof of Lemma 1
Let $\map f m = 0$. 
Then, by constancy, $f = 0$ on $V$.
Hence, by linearity, $\map {X_m} 0 = 0$. 

Let $\map f m \ne 0$. 














\(\ds \map {X_m} f\)

\(=\)







\(\ds \map {X_m} {1 \, f}\)




















\(\ds \)

\(=\)







\(\ds \map {X_m} 1 \map f m + \map {X_m} f\)





Leibniz law














\(\ds \iff\)

\(\)







\(\ds \)




















\(\ds \map {X_m} 1\)

\(=\)







\(\ds 0\)





$\map f m \ne 0$




$f$ is constant, if and only if $\exists \lambda \in \R : f \sqbrk V = \set \lambda$ if and only if $f = \lambda$.


This article, or a section of it, needs explaining.In particular: $\exists$ in the above? Should it not be $\forall$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.















\(\ds \lambda \map {X_m} 1\)

\(=\)







\(\ds \map {X_m} \lambda\)





Definition of Linear Mapping














\(\ds \)

\(=\)







\(\ds \map {X_m} f\)





as $f = \lambda$














\(\ds \)

\(=\)







\(\ds 0\)





as $\map {X_m} 1 = 0$



$\Box$

Let $X_m$ be a tangent vector at $m \in M$ according to Definition 1.
Denote $n := \dim M$. 
Let $f \in \map {C^\infty} {V, \R}$.
Let $\struct {U, \kappa}$ be a chart such that $\map \kappa m = 0$. 
Let $\kappa^i$ be the $i$th coordinate function of the chart $\struct {U, \kappa}$. 

By, Taylor's Theorem/n Variables :














\(\ds f\)

\(=\)







\(\ds f \circ \kappa^{-1} \circ \kappa\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {f \circ \kappa^{-1} } } \kappa\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {f \circ \kappa^{-1} } } 0 + \sum_{i \mathop = 1}^n \map {\frac {\map \partial {f \circ \kappa^{-1} } } {\partial \kappa^i} } 0 \, \kappa^i + \map {\OO_2} \kappa\)










Observe that $\ds \map {\paren {f \circ \kappa^{-1} } } 0 = \map {\paren {f \circ \kappa^{-1} } } {\map \kappa m} = \map f m$ is a constant mapping on $V$.


This article, or a section of it, needs explaining.In particular: The above needs more than observation.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Define $X^i := \map {X_m} {\kappa^i}$.
Then by linearity:

$\ds \map {X_m} f = \map {X_m} {\map f m} + \sum_{i \mathop = 1}^n \map {\frac {\map \partial {f \circ \kappa^{-1} } } {\partial \kappa^i} } 0 \ X^i + \map {X_m} {\map {\OO_2} \kappa}$


Lemma 2
$\map {X_m} {\map {\OO_2} \kappa} = 0$


Proof of Lemma 2
By Taylor's Theorem/n Variables, for each summand of $\map {\OO_2} \kappa$ there exists $i \in \set {1, \ldots, n}$ and an $h \in \map {C^\infty} {V, \R}$ with $\map h m = 0$ such that the summand is $\kappa^i h$.














\(\ds \map {X_m} {\kappa^i h}\)

\(=\)







\(\ds \map {X_m} {\kappa^i} \map h m + \map {\kappa^i} m \map {X_m} h\)





Definition 1 (Leibniz law)














\(\ds \)

\(=\)







\(\ds \map {X_m} {\kappa^i} 0 + 0 \map {X_m} h\)





as $\map h m = 0$, $\map {\kappa^i} m = 0$














\(\ds \)

\(=\)







\(\ds 0\)









Thus the sum $\map {\OO_2} \kappa$ vanishes. 
$\Box$

By Lemma 1: 

$\map {X_m} {\map f m} = 0$

By Lemma 2: 

$\map {X_m} {\map {\OO_2} \kappa} = 0$

Hence:

$\ds \map {X_m} f = \sum_{i \mathop = 1}^n \map {\frac {\map \partial {f \circ \kappa^{-1} } } {\partial \kappa^i} } 0 \ X^i$
Let $\set {e_i}$ be a basis of $\R^n$ such that:

$\ds \kappa = \sum_{i \mathop = 1}^n \kappa^i e_i$

The term Definition:Basis as used here has been identified as being ambiguous.If you are familiar with this area of mathematics, you may be able to help improve $\mathsf{Pr} \infty \mathsf{fWiki}$ by determining the precise term which is to be used.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Disambiguate}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Choose a smooth curve $\gamma: I \to M$ with $0 \in I \subseteq \R$ such that $\map \gamma 0 = m$ and:

$\map {\dfrac {\d \kappa^i \circ \gamma} {\d \tau} } 0 := X^i$
Then:














\(\ds \map {X_m} f\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map {\frac {\map \partial {f \circ \kappa^{-1} } } {\partial \kappa^i} } {\map \kappa m} \map {\frac {\d \kappa^i \circ \gamma} {\d \tau} } 0\)





as $\map \kappa m = 0$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map {\frac {\map \partial {f \circ \kappa^{-1} } } {\partial \kappa^i} } {\map {\kappa \circ \gamma} 0} \map {\frac {\d \kappa^i \circ \gamma} {\d \tau} } 0\)





as $m = \map \gamma 0$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \valueat {\map {\frac {\map \partial {f \circ \kappa^{-1} } } {\partial \kappa^i} } {\map {\kappa \circ \gamma} \tau} \map {\frac {\d \kappa^i \circ \gamma} {\d \tau} } \tau} {\tau \mathop = 0}\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\map {\frac {\map \d {f \circ \kappa^{-1} \circ \kappa \circ \gamma} } {\d \tau} } \tau} {\tau \mathop = 0} {}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \intlimits {\map {\frac {\map \d {f \circ \gamma} } {\d \tau} } \tau} {\tau \mathop = 0} {}\)





as $f \circ \kappa^{-1} \circ \kappa = f$














\(\ds \)

\(=\)







\(\ds \frac \d {\d \tau} {\restriction_0} \, \map {f \circ \gamma} \tau\)









Hence $X_m$ is a tangent vector according to Definition 2. 
This proves the assertion. 
$\blacksquare$


Sources
2013: Gerd Rudolph and Matthias Schmidt: Differential Geometry and Mathematical Physics: $\S 1.4$: Proposition $1.4.7$




