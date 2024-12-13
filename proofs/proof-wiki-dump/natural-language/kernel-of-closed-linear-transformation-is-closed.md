# 

Source: https://proofwiki.org/wiki/Kernel_of_Closed_Linear_Transformation_is_Closed

Theorem
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be Banach spaces.
Let $T : \map D T \to Y$ be a closed linear transformation.
Let $\ker T$ be the kernel of $T$.

Then $\ker T$ is closed. 


Proof
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $\ker T$ converging to $x \in X$. 
We have $T x_n = {\mathbf 0}_Y$ for each $n \in \N$.
Hence from Constant Sequence in Normed Vector Space Converges, we have $T x_n \to {\mathbf 0}_Y$ as $n \to \infty$.
From Sequential Characterization of Closed Linear Transformation, we therefore have that $x \in \map D T$ and:

$\ds T x = \lim_{n \mathop \to \infty} T x_n = {\mathbf 0}_Y$
Hence $x \in \ker T$. 
So every convergent sequence in $\ker T$ has its limit in $\ker T$.
Hence $\ker T$ is closed.
$\blacksquare$





