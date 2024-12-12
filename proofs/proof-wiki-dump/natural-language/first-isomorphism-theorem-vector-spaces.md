# 

Source: https://proofwiki.org/wiki/First_Isomorphism_Theorem/Vector_Spaces

Theorem
Let $K$ be a field.
Let $X$ and $Y$ be vector spaces over $K$.
Let $T : X \to Y$ be a linear transformation.
Let $\ker T$ be the kernel of $T$.
Let $X/\ker T$ be the quotient vector space of $X$ modulo $\ker T$.

Then $X/\ker T$ is isomorphic to $\Img T$ as a vector space.


Proof
From Image of Linear Transformation is Submodule, we assure ourselves that $\Img T$ is indeed a vector space over $K$.
Let $\pi : X \to X/\ker T$ be the quotient mapping. 
From Condition for Mapping from Quotient Vector Space to be Well-Defined, there exists a linear transformation $\Lambda : X/\ker T \to \Img T$ such that:

$\map \Lambda {\map \pi x} = T x$ for each $x \in X$.
To finish, we need to show that $\Lambda$ is injective and surjective.
From Linear Transformation is Injective iff Kernel Contains Only Zero, to show $\Lambda$ is injective it suffices to show that:

$\ker \Lambda = \set { {\mathbf 0}_{X/\ker T} }$
Suppose that $\map \Lambda {\map \pi x} = {\mathbf 0}_Y$.
Then $T x = {\mathbf 0}_Y$.
So $x \in \ker T$. 
That is, by Kernel of Quotient Mapping, we have $\map \pi x = {\mathbf 0}_{X/\ker T}$.
So we have $\ker \Lambda = \set { {\mathbf 0}_{X/\ker T} }$, and so $\ker \Lambda$ is injective by Linear Transformation is Injective iff Kernel Contains Only Zero.
Now let $y \in \Img T$.
Then there exists $x \in X$ such that $y = T x$.
Then, we have $\map \Lambda {\map \pi x} = T x = y$. 
So $\Img T \subseteq \Img \Lambda$.
Since we already have $\Img \Lambda \subseteq \Img T$, we obtain $\Img \Lambda = \Img T$.
So $\Lambda : X/\ker T \to \Img T$ is a vector space isomorphism.
$\blacksquare$





