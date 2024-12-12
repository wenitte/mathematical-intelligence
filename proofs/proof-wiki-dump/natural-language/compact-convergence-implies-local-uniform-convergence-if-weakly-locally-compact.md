# 

Source: https://proofwiki.org/wiki/Compact_Convergence_Implies_Local_Uniform_Convergence_if_Weakly_Locally_Compact

Theorem
Let $T = \struct {S, \tau}$ be a weakly locally compact topological space.
Let $M = \struct {A, d}$ be a metric space.
Let $\sequence {f_n}$ be a sequence of mappings $f_n: X \to M$.
Let $f_n$ converge compactly to $f: X \to M$.

Then $f_n$ converges locally uniformly to $f$.


Proof
Because $T$ is weakly locally compact, each point of $S$ has a compact neighborhood in $T$.
Because $f_n \to f$ compactly, each point of $S$ has a (compact) neighborhood on which $f_n \to f$ uniformly.
Thus $f_n$ converges locally uniformly to $f$.
$\blacksquare$


Also see
Local Uniform Convergence Implies Compact Convergence




