# 

Source: https://proofwiki.org/wiki/Characterization_of_Bases_(Hilbert_Spaces)


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\HH$ be a Hilbert space, and let $\EE$ be an orthonormal subset of $\HH$.

Then the following six statements are equivalent:

$(1): \quad \EE$ is a basis for $\HH$
$(2): \quad h \in \HH, h \perp \EE \implies h = \mathbf 0_\HH$, where $\perp$ denotes orthogonality
$(3): \quad \vee \EE = \HH$, where $\vee \EE$ denotes the closed linear span of $E$
$(4): \quad \forall h \in \HH: h = \ds \sum \set {\innerprod h e e: e \in \EE}$
$(5): \quad \forall g, h \in \HH: \innerprod g h = \ds \sum \set {\innerprod g e \innerprod e h: e \in \EE}$
$(6): \quad \forall h \in \HH: \norm h^2 = \ds \sum \set {\size {\innerprod h e}^2: e \in \EE}$
In the last three statements, $\ds \sum$ denotes a generalized sum.

Statement $(6)$ is commonly known as Parseval's identity.


Proof
$(1)$ implies $(2)$
Suppose that $\EE$ is a basis for $\HH$.
Suppose that $h \perp \EE$ for some $h \in \HH$ with $h \ne {\mathbf 0}_\HH$. 
Then $\innerprod h x = 0$ for all $x \in \EE$.
So $\ds \innerprod {\frac h {\norm h} } x = 0$ for all $x \in \EE$.
Hence:

$\ds \EE \cup \set {\frac h {\norm h} }$ is a orthonormal set.
Hence $\dfrac h {\norm h} \in \EE$.
However, we would then have $\dfrac h {\norm h} \perp \dfrac h {\norm h}$ giving:

$\ds \innerprod {\frac h {\norm h} } {\frac h {\norm h} } = \frac {\innerprod h h} {\norm h} = \norm h = 0$
Then by Norm Axiom $\text N 1$: Positive Definiteness, we have $h = {\mathbf 0}_\HH$, a contradiction. 
$\Box$


$(2)$ implies $(3)$
Suppose that:

$h \in \HH, h \perp \EE \implies h = \mathbf 0_\HH$, where $\perp$ denotes orthogonality.
By the definition of orthocomplement, we have $\EE^\perp = \set { {\mathbf 0}_\HH}$.
Then $\EE^{\perp \perp} = \set { {\mathbf 0}_\HH}^\perp = \HH$ from Linear Subspace Dense iff Zero Orthocomplement.
By Double Orthocomplement is Closed Linear Span, we have $\EE^{\perp \perp} = \vee \EE$ and hence $\vee \EE = \HH$.
$\Box$


$(3)$ implies $(2)$
Suppose that $\vee \EE = \HH$. 
Hence we have $\paren {\vee \EE}^\perp = \set { {\mathbf 0}_\HH}$ from Linear Subspace Dense iff Zero Orthocomplement.
From Orthocomplement of Closure, we have $\paren {\vee \EE}^\perp = \paren {\map \span \EE}^\perp$. 
Then from Orthocomplement equal to Orthocomplement of Linear Span, we have $\paren {\map \span \EE}^\perp = \EE^\perp$.
So $\EE^\perp = \set { {\mathbf 0}_\HH}$.
This is precisely the statement $(2)$. 
$\Box$


$(2)$ implies $(4)$
Suppose that:

$(2): \quad h \in \HH, h \perp \EE \implies h = \mathbf 0_\HH$, where $\perp$ denotes orthogonality
By Bessel's Inequality: Corollary 2:

$\ds \sum \set {\innerprod h e : e \in \EE}$ converges.
Let:

$\ds f = h - \sum \set {\innerprod h e : e \in \EE}$
From Generalized Sum Commutes with Inner Product, we have that:

$\ds \sum \set {\innerprod h e \innerprod e {e'} : e \in \EE}$ converges for any $e' \in \EE$
and further:

$\ds \innerprod {\sum \set {\innerprod h e : e \in \EE} } {e'} = \sum \set {\innerprod h e \innerprod e {e'} : e \in \EE}$
We have $\innerprod e {e'} = 0$ if $e \ne e'$.
Hence we have:

$\ds \sum \set {\innerprod h e \innerprod e {e'} : e \in \EE} = \innerprod h {e'} \innerprod {e'} {e'} = \innerprod h {e'}$
since $\EE$ is orthonormal subset.
Hence we have $\innerprod f {e'} = \innerprod h {e'} - \innerprod {h'} e = 0$. 
So $f \in \EE^\perp$.
Hence $f = {\mathbf 0}_\HH$ by $(2)$. 
That is:

$\ds h = \sum \set {\innerprod h e : e \in \EE}$
$\Box$


$(4)$ implies $(5)$
Suppose that:

$\forall h \in \HH: h = \ds \sum \set {\innerprod h e e: e \in \EE}$
Then for all particular $g \in \HH$ we have:

$\ds g = \sum \set {\innerprod g e e: e \in \EE}$
Then by Generalized Sum Commutes with Inner Product, we have:

$\ds \innerprod g h = \sum \set {\innerprod {\innerprod g e e} h : e \in \EE} = \sum \set {\innerprod g e \innerprod e h : e \in \EE}$
$\Box$


$(5)$ implies $(6)$
Suppose that:

$\forall g, h \in \HH: \innerprod g h = \ds \sum \set {\innerprod g e \innerprod e h: e \in \EE}$
Then setting $g = h$ we have:

$\ds \norm h^2 = \innerprod h h = \sum \set {\innerprod h e \innerprod e h : e \in \EE}$
We have $\innerprod e h = \overline {\innerprod h e}$ and $\innerprod h e \overline {\innerprod h e} = \cmod {\innerprod h e}^2$. 
So:

$\ds \norm h^2 = \innerprod h h = \sum \set {\cmod {\innerprod h e}^2 : e \in \EE}$
$\Box$


$(6)$ implies $(1)$
Suppose that:

$\forall h \in \HH: \norm h^2 = \ds \sum \set {\size {\innerprod h e}^2: e \in \EE}$
Aiming for a contradiction, suppose $\EE$ is not a basis of $\HH$.
Then $\EE$ is not $\subseteq$-maximal among the orthonormal subsets.
So there exists $e_0 \in \HH$ with $\norm {e_0} = 1$, $e \perp \EE$ and $e \not \in \EE$. 
But then $\innerprod {e_0} e = 0$ for each $e \in \EE$.
Then $\norm {e_0}^2 = 0$ by $(6)$ and Generalized Sum of Constant Zero Converges to Zero.
This contradicts that $\norm {e_0} = 1$. 
Hence $\EE$ is a basis of $\HH$.
$\blacksquare$ 


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {I.4.12-13}$




