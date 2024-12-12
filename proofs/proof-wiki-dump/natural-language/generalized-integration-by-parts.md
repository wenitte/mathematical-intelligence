# 

Source: https://proofwiki.org/wiki/Generalized_Integration_by_Parts

  This article was Featured Proof between 16 May 2020 and 13 September 2020.




Theorem
Let $\map f x, \map g x$ be real functions which are integrable and at least $n$ times differentiable.
Then:














\(\ds \int f^{\paren n} g \rd x\)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} \paren {-1}^j f^{\paren {n - j - 1} } g^{\paren j} + \paren {-1}^n \int f g^{\paren n} \rd x\)




















\(\ds \)

\(=\)







\(\ds f^{\paren {n - 1} } g - f^{\paren {n - 2} } g' + f^{\paren {n - 3} } g - \cdots + \paren {-1}^n \int f g^{\paren n} \rd x\)









where $f^{\paren n}$ denotes the $n$th derivative of $f$.


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\ds \int f^{\paren n} g \rd x = \sum_{j \mathop = 0}^{n - 1} \paren {-1}^j f^{\paren {n - j - 1} } g^\paren j + \paren {-1}^n \int f g^{\paren n} \rd x$


Basis for the Induction
$\map P 1$ is the case:

$\ds \int f' g \rd x = f g - \int f g' \rd x$
which is proved in Integration by Parts.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \int f^{\paren k} g \rd x = \sum_{j \mathop = 0}^{k - 1} \paren {-1}^j f^{\paren {k - j - 1} } g^{\paren j} + \paren {-1}^k \int f g^{\paren k} \rd x$

Then we need to show:

$\ds \int f^{\paren {k + 1} } g \rd x = \sum_{j \mathop = 0}^k \paren {-1}^j f^{\paren {k - j} } g^{\paren j} + \paren {-1}^{k + 1} \int f g^{\paren {k + 1} } \rd x$


Induction Step
This is our induction step:















\(\ds \int f^{\paren {k + 1} } g \rd x\)

\(=\)







\(\ds \int \paren {f^{\paren k} }' g \rd x\)




















\(\ds \)

\(=\)







\(\ds f^{\paren k } g - \int f^{\paren k} g' \rd x\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds f^{\paren k} g - \paren {\sum_{j \mathop = 0}^{k - 1} \paren {-1}^j f^{\paren {k - j - 1} } g^\paren {j + 1} + \paren {-1}^k \int f g^{\paren {k + 1} } \rd x}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds f^{\paren k} g + \paren {\sum_{j \mathop = 0}^{k - 1} \paren {-1}^{j + 1} f^{\paren {k - \paren {j + 1} } } g^{\paren {j + 1} } + \paren {-1}^{k + 1} \int f g^{\paren {k + 1} } \rd x}\)





moving $-1$ into the parenthesis














\(\ds \)

\(=\)







\(\ds f^{\paren k} g + \paren {\sum_{j \mathop = 1}^k \paren {-1}^j f^{\paren {k - j} } g^{\paren j} + \paren {-1}^{k + 1} \int f g^{\paren {k + 1} } \rd x}\)





substituting $j$ for $j + 1$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^k \paren {-1}^j f^{\paren {k - j} } g^{\paren j} + \paren {-1}^{k + 1} \int f g^{\paren {k + 1} } \rd x\)





as $f^{\paren k} g$ is the $0$th element of the summation



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \N_{>0}: \int f^{\paren n} g \rd x = \sum_{j \mathop = 0}^{n - 1} \paren {-1}^j f^{\paren {n - j - 1} } g^{\paren j} + \paren {-1}^n \int f g^{\paren n} \rd x$
assuming that $f$ and $g$ are sufficiently differentiable.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.48$




