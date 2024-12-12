# 

Source: https://proofwiki.org/wiki/Continuous_Real_Function_Differentiable_on_Borel_Set


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $\map \BB {\R, \size {\, \cdot \,} }$ be the Borel Sigma-Algebra on $\R$ with the usual topology.
Let $f: \R \to \R$ be a continuous real function.
Let $\map D f$ be the set of all points at which $f$ is differentiable.

Then $\map D f$ is a Borel Set with respect to $\map \BB {\R, \size {\, \cdot \,} }$.


Proof
By the definition of derivative:

$\map {f'} x$ exists
if and only if:

$\ds \lim_{h \mathop \to 0} \frac {\map f {x + h} - \map f x} h = L$ exists
where $L = \map {f'} x$.

For ease of presentation, denote:

$\Delta f := \map f {x + h} - \map f x$
Since $f$ is continuous by hypothesis, so too is $\dfrac {\Delta f} h$ for $h \ne 0$.
Thus we will prove an inequality for $\dfrac {\Delta f} h$ for all rational $h$.
The inequality will then extend to all real $h$ by Rationals are Everywhere Dense in Topological Space of Reals.

By the definition of limit, the claim that the derivative exists is:

$\exists L \in \R: \forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall h \in \R \setminus \set 0: \size h < \delta \implies \size {\dfrac {\Delta f} h - L} < \epsilon$
From Limit with Rational $\epsilon$ and $\delta$ and Limit with $\epsilon$ Powers of $2$, we can instead consider:

$\exists L \in \R: \forall n \in \N: \exists \delta \in \Q_{>0}: \forall h \in \Q \setminus \set 0: \size h < \delta \implies \size {\dfrac {\Delta f} h - L} < 2^{-n}$

Let $\set {\delta_n}$ be an enumeration of all such $\delta$s considered.
Assume the following:

$\forall n \in \N: \exists \delta_n \in \Q_{>0}: \exists y_n \in \Q: \forall h \in \closedint {-\delta_n} {\delta_n}: \size {\map f {x + h} - \map f x - h y_n} \le \size h 2^{-n}$
for some rational sequence $\sequence {y_n}_{n \mathop \in \N}$.
Then: 














\(\ds \size {y_{n + 1} - y_n}\)

\(=\)







\(\ds \size {y_{n + 1} + \frac {\Delta f} h - \frac {\Delta f} h - y_n}\)




















\(\ds \)

\(\le\)







\(\ds \size {\frac {\Delta f} h - y_{n + 1} } + \size {\frac {\Delta f} h - y_n}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(\le\)







\(\ds 2^{-\paren {n + 1} } + 2^{-n}\)





By Hypothesis














\(\ds \)

\(<\)







\(\ds 2^{-n + 1}\)









By the Comparison Test, $\ds \sum_{n \mathop \ge 0} \paren {y_{n + 1} - y_n}$ converges.
The difference of successive terms makes this a Telescoping Series:

$\ds \sum_{n \mathop \ge 0} \paren {y_{n + 1} - y_n} = -y_0 +  \lim_{n \mathop \to \infty} y_n$
so $y_n$ converges to a limit, which will be called $y$.

Then:














\(\ds \size {\Delta f - h y}\)

\(=\)







\(\ds \size {\Delta f - h y_n + h y_n - h y}\)




















\(\ds \)

\(\le\)







\(\ds \size {\Delta f - h y_n} + \size {h y_n - h y}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(\le\)







\(\ds \size {h 2^{-n} } + \size {h y_n - h y}\)




















\(\ds \)

\(=\)







\(\ds \size h \paren {2^{-n} + \size {y_n - y} }\)










We have thus shown that the assumption that:

$\forall n \in \N: \exists \delta_n \in \Q_{>0}: \exists y_n \in \Q: \forall h \in \closedint {-\delta_n} {\delta_n}: \size{ \map f {x + h} -\map f x - h y_n } \le \size h 2^{-n}$
... implies that for all $n \in \N, -\delta_n < h < \delta_n$, there is a real number $y$ such that:

$\size {\Delta f - h y} \le \size h \paren {2^{-n} + \size {y_n - y} }$

Equivalently:

$\size {\dfrac {\map f {x + h} - \map f x} h - y} \le \paren {2^{-n} + \size {y_n -y} }$

The right hand side tends to $0$ as $n \to \infty$, as $2^{-n} \to 0$ and $y_n \to y$.
Thus the left hand side also tends to $0$ as $n \to \infty$.
Thus $\dfrac{\map f {x + h} - \map f x} h \to y$ as $n \to \infty$.
Then $y = \map {f'} x$ by the definition of derivative, and we have shown that our assumptions imply the existence of $\map {f'} x$.

The set of all $x \in \R$ satisfying:

$\forall n \in \N: \exists \delta_n \in \Q_{>0}: \exists y_n \in \Q: \forall h \in \closedint {-\delta_n} {\delta_n}: \size {\map f {x + h} - \map f x - h y_n} \le \size h 2^{-n}$
is:

$\ds \bigcap_n \bigcup_{\delta_n} \bigcup_{y_n} \bigcap_h \set {x \in \R: \size {\dfrac {\map f {x + h} - \map f x} h - y_n} < 2^{-n} }$
By hypothesis, $f$ is continuous.
Hence each set so indexed is open. 
So it is seen that $\map D f$ has been constructed from countably many intersections and unions of open sets.
Hence $\map D f$ is a Borel Set by definition.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Countable Union of Countable Sets is Countable.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.





