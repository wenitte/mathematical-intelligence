# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Concatenation_is_Associative

Theorem
Let $\Sigma$ be an alphabet.

Let $x, y, z$ be words over $\Sigma$ and let $\circ$ denote concatenation. Then:


$(x \circ y) \circ z = x \circ (y \circ z)$.

That is concatenation is associative.


Proof
If $x$, $y$ or $z$ are $\lambda$ then the result follows immediately from Empty Word is Two-sided Identity. 

Otherwise, from the definition of word equality it must first be shown that the lengths of the words are equal.















\(\ds \operatorname{len} \left({\left({x \circ y}\right) \circ z}\right)\)

\(=\)







\(\ds \operatorname{len}\left({x \circ y}\right) + \operatorname{len}(z)\)





Length of Concatenation














\(\ds \)

\(=\)







\(\ds \operatorname{len}(x) + \operatorname{len}(y) + \operatorname{len}(z)\)





Length of Concatenation


















\(\ds \operatorname{len} \left({x \circ \left({y \circ z}\right)}\right)\)

\(=\)







\(\ds \operatorname{len}(x) + \operatorname{len} \left({y \circ z}\right)\)





Length of Concatenation














\(\ds \)

\(=\)







\(\ds \operatorname{len}(x) + \operatorname{len}(y) + \operatorname{len}(z)\)





Length of Concatenation




Then it must be shown that:


$\forall i: \left({\left({x \circ y}\right) \circ z}\right)_i = \operatorname{len} \left({x \circ \left({y \circ z}\right)}\right)_i$

Which will be demonstrated by repeatedly using the definition of [[concatenation and Length of Concatenation:


$
\begin{split}
((x \circ y) \circ z)_i& =\begin{cases}
(x \circ y)_i & \text{if }1 \le i \le \operatorname{len}(x \circ y) \\
z_{i-\operatorname{len}(x \circ y)} & \text{if }\operatorname{len}(x
\circ y) < i \le \operatorname{len}(x \circ y) + \operatorname{len}(z)
\end{cases} \\
& =\begin{cases}
x_i & \text{if }1 \le i \le \operatorname{len}(x) \\
y_{i-\operatorname{len}(x)} & \text{if }\operatorname{len}(x) < i \le
\operatorname{len}(x) + \operatorname{len}(y) \\
z_{i-\operatorname{len}(x \circ y)} & \text{if }\operatorname{len}(x
\circ y) < i \le \operatorname{len}(x \circ y) + \operatorname{len}(z)
\end{cases} \\
& =\begin{cases}
x_i & \text{if }1 \le i \le \operatorname{len}(x) \\
y_{i-\operatorname{len}(x)} & \text{if }\operatorname{len}(x) < i \le
\operatorname{len}(x \circ y) \\
z_{i-\operatorname{len}(x \circ y)} & \text{if }\operatorname{len}(x
\circ y) < i \le \operatorname{len}(x) + \operatorname{len}(y \circ z)
\end{cases} \\
& =\begin{cases}
x_i & \text{if }1 \le i \le \operatorname{len}(x) \\
(y \circ z)_{i-\operatorname{len}(x)} & \text{if
}\operatorname{len}(x) < i \le \operatorname{len}(x) +
\operatorname{len}(y \circ z)
\end{cases} \\
& = (x \circ (y \circ z))_i
\end{split}
$

Hence the result.

$\blacksquare$





