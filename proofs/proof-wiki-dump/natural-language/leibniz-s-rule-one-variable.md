# 

Source: https://proofwiki.org/wiki/Leibniz%27s_Rule/One_Variable



Theorem
Let $f$ and $g$ be real functions defined on the open interval $I$.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $x \in I$ be a point in $I$ at which both $f$ and $g$ are $n$ times differentiable.

Then:

$\ds \paren {\map f x \map g x}^{\paren n} = \sum_{k \mathop = 0}^n \binom n k \map {f^{\paren k} } x \map {g^{\paren {n - k} } } x$
where $\paren n$ denotes the order of the derivative.


Proof
Proof by induction:


Basis for the Induction
Let $n = 1$.
From Product Rule for Derivatives:

$\paren {\map f x \map g x}' = \map f x \map {g'} x + \map {f'} x \map g x$
Likewise:














\(\ds \sum_{k \mathop = 0}^1 \binom 1 k \map {f^{\paren k} } x \map {g^{\paren {1 - k} } } x\)

\(=\)







\(\ds \binom 1 0 \map {f^{\paren 0} } x \map {g^{\paren {1 - 0} } } x + \binom 1 1 \map {f^{\paren 1} } x \map {g^{\paren {1 - 1} } } x\)




















\(\ds \)

\(=\)







\(\ds \map f x \map {g'} x + \map {f'} x \map g x\)










This is our basis for the induction.


Induction Hypothesis
Let $n \in \N$ be fixed.
We assume the inductive hypothesis:

$\ds \paren {\map f x \map g x}^{\paren n} = \sum_{k \mathop = 0}^n \binom n k \map {f^{\paren k} } x \map {g^{\paren {n - k} } } x$
We need to show that:

$\ds \paren {\map f x \map g x}^{\paren {n + 1} } = \sum_{k \mathop = 0}^{n + 1} \binom {n + 1} k \map {f^{\paren k} } x \map {g^{\paren {n + 1 - k} } } x$


Induction Step
By our inductive hypothesis:














\(\ds \paren {\map f x \map g x}^{\paren {n + 1} }\)

\(=\)







\(\ds \paren {\sum_{k \mathop = 0}^n \binom n k \map {f^{\paren k} } x \map {g^{\paren {n - k} } } x}'\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k \paren {\paren {\map {f^{\paren k} } x \map {g^{\paren {n - k} } } x}'}\)





Applications of Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k \paren {\map {f^{\paren {k + 1} } } x \map {g^{\paren {n - k} } } x + \map {f^{\paren k} } x \map {g^{\paren {n + 1 - k} } } x}\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k \map {f^{\paren {k + 1} } } x \map {g^{\paren {n - k} } } x + \sum_{k \mathop = 0}^n \binom n k \map {f^{\paren k} } x \map {g^{\paren {n + 1 - k} } } x\)





splitting the summation




Subsequently, we separate the $k = 0$ case from the second summation. 
For the first summation, we separate the case $k = n$ and then shift the indices up by $1$.
These manipulations give us the following:














\(\ds \paren {\map f x \map g x}^{\paren {n + 1} }\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \binom n k \map {f^{\paren k} } x \map {g^{\paren {n + 1 - k} } } x
          + \sum_{k \mathop = 1}^n \binom n {k - 1} \map {f^{\paren k} } x \map {g^{\paren {n + 1 - k} } } x
          + \binom n 0 \map f x \map {g^{\paren {n + 1} } } x
          + \binom n n \map {f^{\paren {n + 1} } } x \map g x\)










By Pascal's Rule, we finally obtain:














\(\ds \paren {\map f x \map g x}^{\paren {n + 1} }\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \binom {n + 1} k \map {f^{\paren k} } x \map {g^{\paren {n + 1 - k} } } x
          + \binom n 0 \map f x \map {g^{\paren {n + 1} } } x
          + \binom n n \map {f^{\paren {n + 1} } } x \map g x\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \binom {n + 1} k \map {f^{\paren k} } x \map {g^{\paren {n + 1 - k} } } x
          + \binom {n + 1} 0 \map f x \map {g^{\paren {n + 1} } } x
          + \binom {n + 1} {n + 1} \map {f^{\paren {n + 1} } } x \map g x\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n + 1} \binom {n + 1} k \map {f^{\paren k} } x \map {g^{\paren {n + 1 - k} } } x\)










The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Also presented as
Leibniz's Rule in One Variable can often be seen presented in this format:














\(\ds \map {\dfrac {\d^n} {\d x^n} } {f g}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \dbinom n k \dfrac {\d^k f} {\d x^k} \dfrac {\d^{n - k} g} {\d x^{n - k} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d^n f} {\d x^n} g + \dfrac {\d^{n - 1} f} {\d x^{n - 1} } \dfrac {\d g} {\d x} + \dfrac {\d^{n - 2} f} {\d x^{n - 2} } \dfrac {\d^2 g} {\d x^2} + \cdots + \dfrac {\d^{n - k} f} {\d x^{n - k} } \dfrac {\d^k g} {\d^k x} + \cdots + \dfrac {\d f} {\d x} \dfrac {\d^{n - 1} g} {\d^{n - 1} x} + f \dfrac {\d^n g} {\d x^n}\)











Also known as
Leibniz's Rule is also known as Leibniz's Theorem or the Leibniz Theorem.


Special Cases
Second Derivative
Let $f$ and $g$ be real functions defined on the open interval $I$.
Let $x \in I$ be a point in $I$ at which both $f$ and $g$ are twice differentiable.

Then:

$\paren {\map f x \map g x}' ' = \map f x \map {g' '} x + 2 \map {f'} x \map {g'} x + \map {f' '} x \map g x$


Third Derivative
Let $f$ and $g$ be real functions defined on the open interval $I$.
Let $x \in I$ be a point in $I$ at which both $f$ and $g$ are thrice differentiable.

Then:

$\paren {\map f x \map g x}' ' ' = \map f x \map {g' ' '} x + 3 \map {f'} x \map {g' '} x + 3 \map {f' '} x \map {g'} x + \map {f' ' '} x \map g x$


Examples
$8$th Derivative of $x^2 \sin x$
The $8$th derivative with respect to $x$ of $x^2 \sin x$ is given by:

$\dfrac {\d^8} {\d x^8} x^2 \sin x = x^2 \sin x - 16 x \cos x - 56 \sin x$


Source of Name
This entry was named for Gottfried Wilhelm von Leibniz.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Leibniz's Theorem for Differentiation of a Product: $3.3.8$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 13$: Leibnitz's Rule for Higher Derivatives of Products: $13.46$
1969: J.C. Anderson, D.M. Hum, B.G. Neal and J.H. Whitelaw: Data and Formulae for Engineering Students (2nd ed.) ... (previous) ... (next): $4.$ Mathematics: $4.4$ Differential calculus: $\text {(ii)}$ Leibniz's rule
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 10.11 \ (6)$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Leibniz's theorem
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Leibniz theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Leibniz theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Leibniz's Theorem




