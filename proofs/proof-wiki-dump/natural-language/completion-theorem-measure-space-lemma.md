# 

Source: https://proofwiki.org/wiki/Completion_Theorem_(Measure_Space)/Lemma

Lemma
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\NN$ and $\Sigma^*$ be defined as:

$\NN := \set {N \subseteq X: \exists M \in \Sigma: \map \mu M = 0, N \subseteq M}$
$\Sigma^* := \set {E \cup N: E \in \Sigma, N \in \NN}$
Next, define $\bar \mu: \Sigma^* \to \overline \R_{\ge 0}$ by:

$\map {\bar \mu} {E \cup N} := \map \mu E$

The mapping $\bar \mu$ is well-defined, i.e.:

$\forall E, F \in \Sigma: \forall N, M \in \NN: E \cup N = F \cup M \implies \map \mu E = \map \mu F$


Proof
Let $N_0, M_0 \in \Sigma$ be null sets such that $N \subseteq N_0, M \subseteq M_0$.
Then:

$E \subseteq E \cup N = F \cup M \subseteq F \cup M_0$
so that:

$\map \mu E \le \map \mu {F \cup M_0} \le \map \mu F + \map \mu {M_0} = \map \mu F + 0$
Analogously:

$F \subseteq F \cup M = E \cup N \subseteq E \cup N_0$
so that:

$\map \mu F \le \map \mu {E \cup N_0} \le \map \mu E + \map \mu {N_0} = \map \mu E + 0$
In total:

$\map \mu E = \map \mu F$
$\blacksquare$





