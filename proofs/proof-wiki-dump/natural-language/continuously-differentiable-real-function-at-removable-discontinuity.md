# 

Source: https://proofwiki.org/wiki/Continuously_Differentiable_Real_Function_at_Removable_Discontinuity

Theorem
Let $f : \R \to \R$ be a real function.
Let $a \in \R$ be  real number.
Let $f$ be continuous on $\R$ and continuously differentiable in $\R \setminus \set a$.
Suppose that $a$ is a removable discontinuity of $f'$.
That is, suppose the limit $\ds \lim_{x \mathop \to a} \map {f'} x$ exists.

Then $f$ is continuously differentiable at $a$.


Corollary
Let $f : \R \to \R$ be a real function.
Let $a \in \R$ be  real number.
Let $f$ be $n - 1$ times continuously differentiable in $\R$ and $n$ times continuously differentiable in $\R \setminus \set a$.
Suppose that $a$ is a removable discontinuity of $f^{\paren n}$.
That is, suppose the limit $\ds \lim_{x \mathop \to a} \map {f^{\paren n}} x$ exists.

Then $f$ is $n$ times continuously differentiable at $a$.


Proof
By assumption, $\ds \lim_{x \mathop \to a} \map {f'} x = L$ exists.
By definition:

$\forall \epsilon \in \R_{>0} : \exists \delta \in \R_{>0}: \forall x \in \R: 0 < \size {x - a} < \delta \implies \size {\map {f'} x - L} < \epsilon$
Let $h := x - a$.
Suppose $0 < h < \delta$.
Consider a closed interval $\closedint 0 h$.
By assumption, $f$ is continuous on $\closedint 0 h$ and continuously differentiable in $\openint 0 h$.
By Mean Value Theorem:

$\ds \exists \theta \in \openint 0 1 : \frac {\map f h - \map f 0} {h - 0} = \map {f'} {\theta h}$
Thus:

$0 < \size {\theta h} \le \size h < \delta$
and:














\(\ds \size {\frac {\map f h - \map f 0} {h - 0} - L}\)

\(=\)







\(\ds \size {\map {f'} {\theta h} - L}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)





$\ds \lim_{x \mathop \to a} \map {f'} x = L$ exists



Hence:

$\ds \forall h \in \openint 0 \delta : \size {\frac {\map f h - \map f 0} {h - 0} - L} < \epsilon$
Consider a closed interval $\closedint {-h} 0$.
By assumption, $f$ is continuous on $\closedint {-h} 0$ and continuously differentiable in $\openint {-h} 0$.
By Mean Value Theorem:

$\ds \exists \theta \in \openint 0 1 : \frac {\map f 0 - \map f {-h} } {0 - \paren {-h} } = \map {f'} {-\theta h}$
Thus:
$0 < \size {- \theta h} \le \size {-h} < \delta$
and:














\(\ds \size {\frac {\map f {- h} - \map f 0} {- h - 0} - L}\)

\(=\)







\(\ds \size {\map {f'} {- \theta h} - L}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)





$\ds \lim_{x \mathop \to a} \map {f'} x = L$ exists



Hence:

$\ds \forall y \in \openint {-\delta} 0 : \size {\frac {\map f y - \map f 0} {y - 0} - L} < \epsilon$
Altogether, it holds that:

$\ds \forall h \in \R : 0 < \size h < \delta : \size {\frac {\map f h - \map f 0} {h - 0} - L} < \epsilon$
Hence, $f$ is differentiable at $a$:

$\ds \map {f'} a = L = \lim_{x \mathop \to a} \map {f'} x$.
By assumption, $f'$ is continuous on $\R \setminus \set a$.
Hence, $f$ is continuously differentiable on $\R$.
$\blacksquare$





