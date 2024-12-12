# 

Source: https://proofwiki.org/wiki/Closable_Densely-Defined_Operator_is_Closed_iff_Equal_to_Closure

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\tuple {\map D T, T}$ be a closable densely-defined linear operator.
Let $\tuple {\map D {\overline T}, \overline T}$ be the closure of $\tuple {\map D T, T}$.

Then $\tuple {\map D T, T}$ is closed if and only if $T = \overline T$. 


Proof
Let $\struct {\HH \times \HH, \norm {\, \cdot \,}_{\HH \times \HH} }$ be the direct product of $\HH$ with itself equipped with the direct product norm. 
Suppose that $\tuple {\map D T, T}$ is closed.
From Set is Closed iff Equals Topological Closure, we have that $\map \cl {\map \GG T} = \map \GG T$.
From Closable Densely-Defined Linear Operator has Smallest Closed Extension, we have $\map \GG {\overline T} = \map \cl {\map \GG T}$ and hence:

$\map \GG {\overline T} = \map \GG T$
So $T = \overline T$.

Now suppose that $\overline T = \overline T$. 
Then $\map \GG T = \map \GG {\overline T}$. 
Since $\map \GG {\overline T}$ is closed in $\struct {\HH \times \HH, \norm {\, \cdot \,}_{\HH \times \HH} }$, so is $\map \GG T$.
Hence $T$ is closed.
$\blacksquare$





