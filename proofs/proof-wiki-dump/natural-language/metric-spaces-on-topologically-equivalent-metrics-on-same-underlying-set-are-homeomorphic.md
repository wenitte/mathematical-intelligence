# 

Source: https://proofwiki.org/wiki/Metric_Spaces_on_Topologically_Equivalent_Metrics_on_same_Underlying_Set_are_Homeomorphic

Theorem
Let $M_1 = \struct {A, d_1}$ and $M_2 = \struct {A, d_2}$ be metric spaces on the same underlying set $A$.
Let $d_1$ and $d_2$ be topologically equivalent.

Then $M_1$ and $M_2$ are homeomorphic.


Proof
By definition, $d_1$ and $d_2$ are topologically equivalent on $A$ if and only if:

For all metric spaces $\struct {B, d}$ and $\struct {C, d'}$:
For all mappings $f: B \to A$ and $g: A \to C$:
$(1): \quad f$ is $\tuple {d, d_1}$-continuous if and only if $f$ is $\tuple {d, d_2}$-continuous
$(2): \quad g$ is $\tuple {d_1, d'}$-continuous if and only if $g$ is $\tuple {d_2, d'}$-continuous.
Set $B = C = A$.
The result follows by definition of homeomorphic metric spaces.
$\blacksquare$





