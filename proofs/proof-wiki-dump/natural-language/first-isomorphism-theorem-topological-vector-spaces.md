# 

Source: https://proofwiki.org/wiki/First_Isomorphism_Theorem/Topological_Vector_Spaces

Theorem
Let $K$ be a topological field.
Let $\struct {X, \tau_X}$ and $\struct {Y, \tau_Y}$ be vector spaces over $K$.
Let $T : X \to Y$ be a continuous and open linear transformation.
Let $\ker T$ be the kernel of $T$.
Let $X/\ker T$ be the quotient topological vector space of $X$ modulo $\ker T$.

Then $X/\ker T$ is topologically isomorphic to $\Img T$.


Proof
Let $\pi : X \to X/\ker T$ be the quotient mapping.
From First Isomorphism Theorem: Vector Spaces, there exists a linear isomorphism $\Lambda : X/\ker T \to \Img T$ with $T = \Lambda \circ \pi$. 
It remains to argue that $\Lambda$ is a homeomorphism.
Since $T$ is continuous, we obtain that $\Lambda$ is continuous from Factorization of Continuous Linear Transformation between Topological Vector Spaces.
Since $T$ is open, we obtain that $\Lambda$ is open from Factorization of Open Linear Transformation between Topological Vector Spaces.
From Bijection is Open iff Inverse is Continuous, $\Lambda^{-1}$ is continuous.
So $\Lambda$ is a homeomorphism, and hence a topological isomorphism.
$\blacksquare$





