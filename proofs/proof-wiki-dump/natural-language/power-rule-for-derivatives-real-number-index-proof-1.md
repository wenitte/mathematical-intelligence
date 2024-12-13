# 

Source: https://proofwiki.org/wiki/Power_Rule_for_Derivatives/Real_Number_Index/Proof_1

Theorem
Let $n \in \R$.
Let $f: \R \to \R$ be the real function defined as $\map f x = x^n$.

Then:

$\map {f'} x = n x^{n-1}$
everywhere that $\map f x = x^n$ is defined.

When $x = 0$ and $n = 0$, $\map {f'} x$ is undefined.


Proof
We are going to prove that $\map {f'} x = n x^{n - 1}$ holds for all real $n$.
To do this, we compute the limit $\ds \lim_{h \mathop \to 0} \frac {\paren {x + h}^n - x^n} h$:















\(\ds \frac {\paren {x + h}^n - x^n} h\)

\(=\)







\(\ds \frac {x^n} h \paren {\paren {1 + \frac h x}^n - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac{x^n} h \paren {e^{n \map \ln {1 + \frac h x} } - 1}\)




















\(\ds \)

\(=\)







\(\ds x^n \cdot \frac {e^{n \map \ln {1 + \frac h x} } - 1} {n \map \ln {1 + \frac h x} } \cdot \frac {n \map \ln {1 + \frac h x} } {\frac h x} \cdot \frac 1 x\)










Now we use the following results:

$\ds \lim_{x \mathop \to 0} \frac {\exp x - 1} x = 1$ from Derivative of Exponential at Zero
$\ds \lim_{x \mathop \to 0} \frac {\map \ln {1 + x} } x = 1$ from Derivative of Logarithm at One
to obtain:

$x^n \cdot \dfrac {e^{n \map \ln {1 + \frac h x} } - 1} {n \map \ln {1 + \dfrac h x} } \cdot \dfrac {n \map \ln {1 + \dfrac h x}} {\dfrac h x} \cdot \dfrac 1 x \to n x^{n - 1}$ as $h \to 0$
Hence the result.
$\blacksquare$





