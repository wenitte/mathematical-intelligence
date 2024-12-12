# 

Source: https://proofwiki.org/wiki/Equivalence_Classes_induced_by_Derivative_Function_on_Set_of_Functions

Theorem
Let $X$ be the set of real functions $f: \R \to \R$ which possess continuous derivatives.
Let $\RR \subseteq X \times X$ be the equivalence relation on $X$ defined as:

$\RR = \set {\tuple {f, g} \in X \times X: D f = D g}$
where $D f$ denotes the first derivative of $f$.

Then the equivalence classes of $\RR$ are defined as:

$\map {\eqclass f \RR} x = \set {g \in X: \exists c \in \R: \forall x \in \R: \map g x = \map f x + c}$
That is, it consists of the set of all real functions $f \in X$ which differ by a real constant.


Proof
Follows directly from Derivative Function on Set of Functions induces Equivalence Relation.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 7$: Relations: Exercise $4$




