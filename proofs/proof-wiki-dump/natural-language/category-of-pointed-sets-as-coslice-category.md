# 

Source: https://proofwiki.org/wiki/Category_of_Pointed_Sets_as_Coslice_Category



Theorem
Let $\mathbf{Set}_*$ be the category of pointed sets.
Let $\mathbf{Set}$ be the category of sets.
Let $1 := \left\{{*}\right\}$ be any singleton.

Then:

$\mathbf{Set}_* \cong 1 \mathbin / \mathbf{Set}$
where $1 \mathbin / \mathbf{Set}$ denotes the coslice of $\mathbf{Set}$ under $1$ and $\cong$ signifies isomorphic categories.


Proof
Define the functor $F: \mathbf{Set}_* \to 1 \mathbin / \mathbf{Set}$ by:

$\map F {C, c} := \bar c: 1 \to C$
$F f := f$
where $\bar c: 1 \to C$ is defined by $\bar c (*) = c$.
Further, define $G: 1 \mathbin / \mathbf{Set} \to \mathbf{Set}_*$ by:

$\map G {x: 1 \to C} := \struct {C, x \paren *}$
$G f := f$


$F$ is a functor
The definition of $F$ on morphisms is admissible, since for any pointed mapping $\map f: {C, c} \to \struct {D, d}$:














\(\ds f \circ \bar c \paren *\)

\(=\)







\(\ds \map f c\)





Definition of $\bar c$














\(\ds \)

\(=\)







\(\ds d\)





$f$ is a pointed mapping














\(\ds \)

\(=\)







\(\ds \bar d \paren *\)





Definition of $\bar d$



Thus by Equality of Mappings, $f \circ \bar c = \bar d$.
So indeed $F f = f$ is a morphism $\bar c \to \bar d$, as desired.
The identity morphisms of both $\mathbf{Set}_*$ and $1 \mathbin / \mathbf{Set}$ are the identity mappings, which $F$ thus preserves.
That $F$ preserves composition is also trivial, since $\mathbf{Set}_*$ and $1 \mathbin / \mathbf{Set}$ both have composition of mappings as their $\circ$.
In conclusion, $F$ is a functor.


$G$ is a functor
Let $x: 1 \to C$ and $y: 1 \to D$ be objects of the coslice $1 \mathbin / \mathbf{Set}$.
Let $f: C \to D$ be a morphism $x \to y$.
That is, let $f \circ x = y$.
Thus, in particular:

$\map f {\map x *} = \map y *$
showing that $f$ is a pointed mapping $\struct {C, \map x *} \to \struct {D, \map y *}$.
Observe that the composition and the identity morphisms of $1 \mathbin / \mathbf{Set}$ and $\mathbf{Set}_*$ are identical.
Because $G$ is the identity on morphisms, it is thus trivially a functor.


$F$ is an isomorphism
Because $F$ and $G$ are the identity on morphisms, it will suffice to show that:

$F \map G x = x$ for all objects $x$ of $1 \mathbin / \mathbf{Set}$
$G \map F {C, c} = \struct {C, c}$ for all objects $\struct {C, c}$ of $\mathbf{Set}_*$
Explicitly:














\(\ds F \map G {x: 1 \to C}\)

\(=\)







\(\ds \map F {C, \map x *}\)




















\(\ds \)

\(=\)







\(\ds \overline {\map x *}\)









Now $\overline {\map x *}: 1 \to C$ is defined by $\map {\overline {\map x *} * = \map x *$.
Hence $\overline {\map x *} = x$ by Equality of Mappings.
For the other equality:














\(\ds G \map F {C, c}\)

\(=\)







\(\ds \map G {\bar c: 1 \to C}\)




















\(\ds \)

\(=\)







\(\ds \struct {C, \map {\bar c} *}\)




















\(\ds \)

\(=\)







\(\ds \struct {C, c}\)









where the last equality follows by definition of $\bar c$.

Thus $F$ is shown to be an isomorphism, and hence:

$\mathbf{Set}_* \cong 1 \mathbin / \mathbf{Set}$
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.6$: Example $1.8$




