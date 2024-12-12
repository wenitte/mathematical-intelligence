# 

Source: https://proofwiki.org/wiki/Canonical_Bijection_from_Completely_Prime_Filters_to_Meet_Irreducible_Elements


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a locale.

Let $\map {\operatorname{Sp}} L = \struct{\map {\operatorname{pt}} L, \set{\Sigma_a : a \in L}}$ be the spectrum of $L$ as completely prime filters where:

$\quad\map {\operatorname{pt}} L$ denotes the set of points as completely prime filters of $L$.
$\quad$for each $a \in L$, $\Sigma_a = \set{p \in \map {\operatorname{pt}} L : a \in p}$

Let $\Sigma_L = \set{\Sigma_a : a \in L}$

Let $\map {\operatorname{Sp}'} L = \struct{\map {\operatorname{pt}'} L, \set{\Sigma'_a : a \in L}}$ be the spectrum of $L$ as meet-irreducible elements where:

$\quad\map {\operatorname{pt}'} L$ denotes the set of points as meet-irreducible elements of $L$.
$\quad$for each $a \in L$, $\Sigma'_a = \set{p \in \map {\operatorname{pt}'} L : a \npreceq p}$

Let $\Sigma'_L = \set{\Sigma'_a : a \in L}$

Let $f : \map {\operatorname{pt}} L \to \map {\operatorname{pt}'} L$ be the mapping defined by:

$\forall p \in \map {\operatorname{pt}} L : \map f p = \bigvee \set{a \in L : a \notin p}$
where:

$\bigvee \set{a \in L : a \notin p}$ denotes the supremum of the set $\set{a \in L : a \notin p}$

Then:

$f$ is a bijection
$f^\to \restriction_{\Sigma_L}$ is a surjection from $\Sigma_L$ to $\Sigma'_L$


Proof
$f$ is a Bijection
From Meet Irreducible Element Induced by Completely Prime Filter:

$f$ is a well-defined mapping

Let $g : \map {\operatorname{pt}'} L \to \map {\operatorname{pt}} L$ be the mapping defined by:

$\forall m \in \map {\operatorname{pt}'} L : \map g m = \set{a \in L : a \npreceq m}$
From Completely Prime Filter Induced by Meet Irreducible Element:

$g$ is a well-defined mapping

From Completely Prime Filter Induced by Meet Irreducible Induced by Completely Prime Filter:

$g \circ f = \operatorname {id}_{\map {\operatorname{pt}} L}$
where $\operatorname {id}_{\map {\operatorname{pt}} L}$ is the identity mapping on $\map {\operatorname{pt}} L$

From Meet Irreducible Induced by Completely Prime Filter Induced by Meet Irreducible:

$f \circ g = \operatorname {id}_{\map {\operatorname{pt}'} L}$
where $\operatorname {id}_{\map {\operatorname{pt}} L}$ is the identity mapping on $\map {\operatorname{pt}'} L$

Hence $f$ is a bijection by definition.
$\Box$


$f^\to \restriction_{\Sigma_L}$ is a Surjection
We have:










\(\ds \forall a \in L: \, \)



\(\ds \map {f^\to} {\Sigma_a}\)

\(=\)







\(\ds \set{\map f p : p \in \Sigma_a}\)





Definition of Direct Image Mapping














\(\ds \)

\(=\)







\(\ds \set{\map f p : p \in \map {\operatorname{pt} } L : a \in p}\)





Definition of $\Sigma_a$














\(\ds \)

\(=\)







\(\ds \set{ \bigvee L \setminus p : p \in \map {\operatorname{pt} } L : a \in p}\)





Definition of $\map f p$














\(\ds \)

\(=\)







\(\ds \set{\bigvee L \setminus p : p \in \map {\operatorname{pt} } L : a \npreceq \bigvee L \setminus p}\)





Element of Completely Prime Filter iff Does not Precede Supremum of Relative Complement














\(\ds \)

\(=\)







\(\ds \set{m \in  \map {\operatorname{pt}'} L : a \npreceq m}\)





as $f$ is a bijection














\(\ds \)

\(=\)







\(\ds \Sigma'_a\)





Definition of $\Sigma'_a$



It follows that $f^\to \restriction_{\Sigma_L}$ is a surjection onto $\Sigma'_L$ by definition.
$\Box$

The result follows.
$\blacksquare$





