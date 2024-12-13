# 

Source: https://proofwiki.org/wiki/Limsup_Squeeze_Theorem

Theorem
Let $\sequence {x_n}$ and $\sequence {y_n}$ be sequences in $\R$.
Let:

$(1): \quad \forall n \ge n_0: \size {x_n} \le y_n$
$(2): \quad \ds \limsup_{n \mathop \to \infty} \paren {y_n} = 0$, where $\limsup$ denotes the limit superior.

Then:

$\ds \lim_{n \mathop \to \infty} x_n = 0$


Direct Proof
Since $\size {x_n} \ge 0$, we have that $y_n \ge 0$.
Therefore, we know:

$\ds 0 \le \liminf_{n \mathop \to \infty} \paren {y_n} \le \limsup_{n \mathop \to \infty} \paren {y_n}$
where $\liminf$ denotes the limit inferior.
So:

$\ds \liminf_{n \mathop \to \infty} \paren {y_n} = \limsup_{n \mathop \to \infty} \paren {y_n} = 0$
by the Squeeze Theorem.
Thus:

$\ds \lim_{n \mathop \to \infty} \paren {y_n} = 0$
but:

$\ds 0 \le \size {x_n} \le y_n \implies \lim_{n \mathop \to \infty} \size {x_n} = 0$
Therefore:

$\ds \lim_{n \mathop \to \infty} \paren {-\size {x_n} } = 0$
Then since $-\size {x_n} \le x_n \le \size {x_n}$, it follows by the Squeeze Theorem that:

$\ds \lim_{n \mathop \to \infty} x_n = 0$
$\blacksquare$





