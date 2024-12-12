# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Nowhere_Dense



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$.
The following definitions of the concept of Nowhere Dense are equivalent:

Definition 1
$H$ is nowhere dense in $T$ if and only if:

$\paren {H^-}^\circ = \O$
where $H^-$ denotes the closure of $H$ and $H^\circ$ denotes its interior.

Definition 2
$H$ is nowhere dense in $T$ if and only if:

$H^-$ contains no open set of $T$ which is non-empty
where $H^-$ denotes the closure of $H$.


Proof
$(1)$ implies $(2)$
Let $H$ be nowhere dense in $T$ by definition $1$.
Then by definition:

$\paren {H^-}^\circ = \O$
Hence by definition of interior:

the union of all subsets of $H$ which are open in $T$.
But this union is empty.
Hence all subsets of $H$ which are open in $T$ must themselves be empty.
Thus $H$ is nowhere dense in $T$ by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $H$ be nowhere dense in $T$ by definition $2$.
Then by definition:

$H^-$ contains no open set of $T$ which is non-empty
where $H^-$ denotes the closure of $H$.
Hence the union of all subsets of $H$ which are open in $T$ must itself be empty.
Thus $H$ is nowhere dense in $T$ by definition $1$.
$\blacksquare$





