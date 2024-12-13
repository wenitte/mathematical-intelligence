# 

Source: https://proofwiki.org/wiki/Right_Inverse_Mapping_is_Injection



Theorem
Let $f: S \to T$ be a mapping.
Let $g: T \to S$ be a right inverse of $f$.

Then $g$ is an injection.


Proof
By the definition of right inverse:

$f \circ g = I_T$
where $I_T$ is the identity mapping on $T$.

By Identity Mapping is Injection, $I_T$ is an injection.
By Injection if Composite is Injection, it follows that $g$ is an injection.
$\blacksquare$


Also see
Left Inverse Mapping is Surjection


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Composition of Functions
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 8$: Composition of Functions and Diagrams: Exercise $3$




