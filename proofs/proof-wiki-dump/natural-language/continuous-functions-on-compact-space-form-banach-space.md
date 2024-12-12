# 

Source: https://proofwiki.org/wiki/Continuous_Functions_on_Compact_Space_form_Banach_Space

Theorem
Let $X$ be a compact Hausdorff space.
Let $Y$ be a Banach space.
Let $\CC = \CC \struct {X; Y}$ be the space of continuous functions on $X$ valued in $Y$. 
Let $\norm {\,\cdot\,}_\infty$ be the supremum norm on $\CC$.

Then $\struct {\CC, \norm {\,\cdot\,}_\infty}$ is a Banach space.


Proof
From Continuous Function on Compact Space is Bounded, every continuous mapping $f : X \to Y$ is bounded.
Hence $\map \CC {X; Y} = \map {\CC_b} {X; Y}$, where $\map {\CC_b} {X; Y}$ is the space of bounded continuous functions on $X$ valued in $Y$.
From Bounded Continuous Functions on Topological Space form Banach Space, we have that $\struct {\map {\CC_b} {X; Y}, \norm {\, \cdot \,}_\infty} = \struct {\CC, \norm {\,\cdot\,}_\infty}$ is a Banach space.
$\blacksquare$





