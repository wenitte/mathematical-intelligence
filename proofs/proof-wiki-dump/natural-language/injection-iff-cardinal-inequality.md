# 

Source: https://proofwiki.org/wiki/Injection_iff_Cardinal_Inequality



Theorem
Let $\card T$ denote the cardinal number of $T$.
Let $S$ and $T$ be sets such that $S \sim \card S$ and $T \sim \card T$.

Then:

$\card S \le \card T $ if and only if there exists an injection $f: S \to T$.


Proof
Necessary Condition
Suppose that $\card S \le \card T$.
Let $g : S \to \card S$ be a bijection and $h: \card T \to T$ be a bijection.

It follows that $g: S \to \card T$ is an injection by the fact that $\card T \le \card S$.

Then from Composite of Injections is Injection, $h \circ g: S \to T$ is an injection.
$\Box$


Sufficient Condition
The other direction follows from Injection implies Cardinal Inequality.
$\blacksquare$





