# 

Source: https://proofwiki.org/wiki/Cardinality_of_Image_of_Mapping_of_Intersections_is_not_greater_than_Weight_of_Space

Theorem
Let $T = \struct {X, \tau}$ be a topological space.
Let $f: X \to \tau$ be a mapping such that:

$\forall x \in X: \paren {x \in \map f x \land \forall U \in \tau: x \in U \implies \map f x \subseteq U}$
Then the cardinality of the image of $f$ is no greater than the weight of $T$:

$\card {\Img f} \le \map w T$


Proof
By definition of weight, there exists a basis $\BB$ of $T$ such that:

$\card \BB = \map w T$
By Image of Mapping of Intersections is Smallest Basis:

$\Img f \subseteq \BB$
Thus by Subset implies Cardinal Inequality:

$\card {\Img f} \le \card \BB = \map w T$
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_2:17




