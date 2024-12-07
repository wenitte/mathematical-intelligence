Let's translate each step of this proof into natural language:

First, we start with Wilson's theorem, which says that for any prime number p, factorial of (p-1) is congruent to -1 mod p.

Second, we introduce a lemma (helper theorem) concerning polynomials. This lemma says that for any polynomial with integer coefficients, if the degree of the polynomial is d, and the number of integer roots mod p (from the set {0,1,...,p-1}) exceeds d, then every coefficient of that polynomial is a multiple of p.

Third, we construct a specific polynomial function f(x) defined as x to the power of (p-1) minus 1 minus the product of all terms (x-k) for k in {1,...,p-1}. We note that the degree of f is less than p-1 and the leading coefficient of f (the coefficient of the highest power term) is 0.

Fourth, we analyze the roots of this polynomial. Specifically, we show that for each number a in the set {1,...,p-1}, the polynomial evaluated at a gives us 0 mod p, by referencing Fermat's Little Theorem. As a result, the number of roots of the polynomial f is p-1, which is greater than the degree of f.

Fifth, because the number of roots exceeded the degree of the polynomial, we use our polynomial lemma from earlier to conclude that every coefficient of the polynomial f is a multiple of p. This then implies that f(0) is congruent to 0 mod p. We then find that -1 minus the product of all numbers from 1 to (p-1), multiplied by (-1) raised to the power of (p-1), also gives us 0 mod p.

Finally, we consider the case when p is an odd prime. We note that -1 raised to any odd power is 1, so -1 minus the factorial of (p-1) is congruent to 0 mod p. This is precisely the statement we wanted to show: the factorial of (p-1) is congruent to -1 mod p, as stated by Wilson's theorem.

Therefore, the proof is complete: Wilson's theorem holds for all prime numbers p.