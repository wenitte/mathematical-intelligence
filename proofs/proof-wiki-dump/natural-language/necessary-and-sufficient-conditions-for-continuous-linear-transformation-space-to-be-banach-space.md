# 

Source: https://proofwiki.org/wiki/Necessary_and_Sufficient_Conditions_for_Continuous_Linear_Transformation_Space_to_be_Banach_Space



Theorem
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces.
Let $\struct{\map {CL} {X, Y}, \norm{\, \cdot \,}}$ be the continuous linear transformation space equipped with the supremum operator norm.

Then $\struct {\map {CL} {X, Y}, \norm{\, \cdot \,} }$ is a Banach Space if and only if $\struct {Y, \norm{\, \cdot \,}_Y}$ is a Banach Space.


Proof
Necessary Condition
Let $Y$ be a Banach space.
Let $\sequence {T_n}_{n \mathop \in \N} \in \map {CL} {X, Y}$ be a Cauchy sequence.
Let $x \in X$.
Let $\norm {\, \cdot \,}$ be the supremum operator norm.


$\sequence {T_n x}_{n \mathop \in \N}$ is a Cauchy sequence in $\struct {Y, \norm {\, \cdot \,}_Y}$
We have that:










\(\ds \forall x \in X : \forall n, m \in \N: \, \)



\(\ds \norm {T_n x - T_m x}_Y\)

\(=\)







\(\ds \norm {\paren {T_n - T_m} x}_Y\)





Linear Mappings between Vector Spaces form Vector Space














\(\ds \)

\(\le\)







\(\ds \norm {T_n - T_m} \norm x_X\)





Supremum Operator Norm as Universal Upper Bound



By definition of Cauchy sequence:

$\forall \epsilon \in \R_{>0}: \exists N \in \N: \forall m, n \in \N: m, n \ge N: \norm {T_n - T_m} < \epsilon$
Suppose $m, n \ge N$.
Then:

$\forall \epsilon \in \R_{>0} : \forall x \in X : \norm {T_n x - T_m x}_Y < \epsilon \norm x_X$
Let $\epsilon' = \epsilon \norm x_X$
$\epsilon \in \R_{>0}$ and $x \in X$ were arbitrary.
Hence $\epsilon' \in \R_{> 0}$ is also arbitrary.
Therefore:

$\forall \epsilon' \in \R_{> 0} :  \exists N \in \N: \forall m, n \in \N: m, n \ge N: \norm {T_n x - T_m x}_Y < \epsilon'$
By definition, $\sequence {T_n x}_{n \mathop \in \N}$ is a Cauchy sequence in $\struct {Y, \norm {\, \cdot \,}_Y}$.
$\Box$


$\sequence {T_n x}_{n \mathop \in \N}$ converges in  $\struct {Y, \norm {\, \cdot \,}_Y}$
$Y$ is Banach.
$\sequence {T_n x}_{n \mathop \in \N}$ is a Cauchy sequence in $\struct {Y, \norm {\, \cdot \,}_Y}$.
Hence, $\sequence {T_n x}_{n \mathop \in \N}$ converges in $Y$ with limit, say, $Tx \in Y$.
$\Box$


$T$ is a linear transformation
Let $x_1, x_2 \in X$.
Then:

$\ds \lim_{n \mathop \to \infty} \paren{T_n x_1} = T x_1$
$\ds \lim_{n \mathop \to \infty} \paren{T_n x_2} = T x_2$
$Y$ is a vector space.
Thus, $x_1 + x_2 \in Y$.
Hence:

$\ds \lim_{n \mathop \to \infty} \paren {T_n \paren {x_1 + x_2}} = T \paren {x_1 + x_2}$
By combination of limits:

$\ds \lim_{n \mathop \to \infty} \paren{T_n x_1 + T_n x_2} = T x_1 + T x_2$
By linearity of $T_n$:

$\sequence {T_n x_1 + T_n x_2}_{n \mathop \in \N} = \sequence {T\paren {x_1 + x_2}}_{n \mathop \in \N}$
By uniqueness of limits:

$T \paren {x_1 + x_2} = T x_1 + T x_2$.

Let $\alpha \in \set {\R, \C}$.
Let $x \in X$.
Then:

$\ds \lim_{n \mathop \to \infty} \paren {T_n x} = T x$
By Multiple Rule for Sequences:

$\ds \lim_{n \mathop \to \infty} \paren {\alpha \cdot T_n x} = \alpha \cdot T x$
By linearity of $T_n$:

$\sequence{\alpha \cdot \paren{T_n x}}_{n \mathop \in \N} = \sequence{T_n\paren{\alpha \cdot x}}_{n \mathop \in \N}$
Since $X$ is a vector space:

$\alpha \cdot x \in X$
Then:

$\ds \lim_{n \mathop \to \infty} \paren {T_n\paren{\alpha \cdot x}}_{n \mathop \in \N} = T \paren {\alpha \cdot x}$.
Altogether:

$\alpha \cdot \map T x = \map T {\alpha \cdot x}$.

Altogether, by definition of linear transformation:

$T \in \map \LL {X, Y}$
$\Box$


$T$ is a continuous transformation
Let $\sequence {T_n}_{n \mathop \in \N} \in \map {CL} {X, Y}$ be a Cauchy sequence.
Then:

$\exists N \in \N : \forall m, n \in \N : m, n > N : \norm {T_n - T_m} < \epsilon$
Hence:

$\exists N \in \N : \forall n > N : \norm {T_n - T_{N + 1} } < \epsilon$
Therefore:










\(\ds \forall n > N : \forall x \in X: \, \)



\(\ds \norm {T_n x - T_{N + 1} x}_Y\)

\(\le\)







\(\ds \norm {T_n - T_{N + 1} } \norm x_X\)





Supremum Operator Norm as Universal Upper Bound














\(\ds \)

\(<\)







\(\ds \epsilon \cdot \norm x_X\)









Take the limit $n \to \infty$.
Then: 

$\forall x \in X : \norm {T x - T_{N + 1} x} < \epsilon \norm x_X$
Thus:










\(\ds \forall x \in X: \, \)



\(\ds \norm {Tx}_Y\)

\(=\)







\(\ds \norm {Tx - T_{N+1} x + T_{N+1} x }_Y\)




















\(\ds \)

\(\le\)







\(\ds \norm {Tx - T_{N + 1} x}_Y + \norm {T_{N + 1} x}_Y\)





Definition of Norm on Vector Space














\(\ds \)

\(<\)







\(\ds \epsilon \norm x_X + \norm {T_{N + 1} } \norm x_X\)





Supremum Operator Norm as Universal Upper Bound














\(\ds \)

\(=\)







\(\ds \paren {\epsilon + \norm {T_{N + 1} } } \norm x_X\)




















\(\ds \)

\(=\)







\(\ds M \norm x_X\)





$\epsilon + \norm {T_{N + 1} } = M \in \R$



By continuity of linear transformations:

$T \in \map {CL} {X, Y}$
$\Box$


$T_n$ converges to $T$ in $\struct {\map {CL} {X, Y}, \norm {\, \cdot \,}}$
By definition of Cauchy sequence.

$\forall \epsilon \in \R_{>0} : \exists N \in \N : \forall n, m \in \N : n, m > N \implies \norm {T_n - T_m} < \epsilon$
Hence:










\(\ds \forall \epsilon \in \R_{>0} : \exists N \in \N : \forall n, m > N : \forall x \in X: \, \)



\(\ds \norm {T_n x - T_m x}_Y\)

\(\le\)







\(\ds \norm {T_n - T_m} \norm x_X\)





Supremum Operator Norm as Universal Upper Bound














\(\ds \)

\(<\)







\(\ds \epsilon \norm x_X\)









We have that Norm on Vector Space is Continuous Function.
Take the limit $m \to \infty$.
By Limit of Composite Function:










\(\ds \forall \epsilon \in \R_{>0} : \exists N \in \N : \forall n > N : \forall x \in X: \, \)



\(\ds \norm {T_n x - T x}_Y\)

\(\le\)







\(\ds \norm {T_n - T} \norm x_X\)




















\(\ds \)

\(<\)







\(\ds \epsilon \norm x_X\)









Hence:

$\forall \epsilon \in \R_{>0} : \exists N \in \N : \forall n > N : \norm {T_n - T} < \epsilon$
By definition, $T$ is continuous.
$\Box$

Altogether, a Cauchy sequence $\sequence {T_n}_{n \mathop \in \N}$ converges to a linear and continuous mapping $T$ in $\struct {\map {CL} {X, Y}, \norm{\, \cdot \,} }$.
$\Box$


Sufficient Condition
Let $\sequence {y_n}$ be a Cauchy sequence in $Y$.
Given $y\in Y$, define the mapping $f_y: X \to Y$ that

$\map {f_y} x = \map \varphi x y$
where $\varphi \in X'$ is a fixed nonzero element of the dual space $X'$.
Note that

$\norm {\map {f_y} x} = \size {\map \varphi x} \norm {y}$
so

$\norm {f_y} = \norm {\varphi} \norm {y}$
so $f_y \in \map {CL} {X,Y}$.
Since

$\sequence {y_n}$ is a Cauchy sequence in $Y$,
and

$\norm {f_y} = \norm {\varphi} \norm {y}$,
the sequence $\sequence {f_{y_n}}$ is a Cauchy sequence in $\map {CL} {X,Y}$.
By assumption, $\sequence {f_{y_n}}$ converges. Let $f \in \map {CL} {X,Y}$ be such that $f_{y_n} \to f$.
Let $x_0 \in X$ be such that $\map \varphi {x_0} = 1$.
Then:














\(\ds \map f {x_0}\)

\(=\)







\(\ds \lim_{n \to \infty} \map{f_{y_n} } {x_0}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \to \infty} \map \varphi {x_0} y_n\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \to \infty} y_n\)









So $\sequence {y_n}$ converges to $\map f {x_0} \in Y$.
So $\struct {Y, \norm{\, \cdot \,}_Y}$ is a Banach Space.

$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X, Y}$. When is $\map {CL} {X, Y}$ complete?




