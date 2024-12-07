This is a proof invoking the Intermediate Value Theorem (IVT). The theorem is defined such that for all real-valued continuous functions defined on the closed interval from a to b, if any real number k is situated between the values of the function at a and b, then there exists a point c within the open interval (a, b) where the function equals k. 

Without a loss of generality, let's assume that f(a) < k < f(b) (the case where f(b) < k < f(a) follows a similar argument). 

Let's construct a set S made up of all values x in the closed interval from a to b where f(x) is less than k. Let's denote the supremum (the least upper bound) of this set as c. 

Notice, that the endpoints a and b are not in the set S. For a, consider any positive number ε. Because of the continuity of f, there exists a positive δ such that for all x in the open interval from a-δ to a+δ, the absolute difference between f(x) and f(a) is less than ε. So, if we select ε to be half of the difference between k and f(a), we can find a δ₁ such that for all x in the interval (a, a+δ₁), f(x) is less than k. 
Similarly for b, there exists a δ₂ such that for all x in the interval (b-δ₂, b), f(x) is greater than k. Hence neither a nor b belong to the sup(S).

This means that the number c we found earlier must lie strictly between a and b.

Next, consider the properties of supremum. If x is less than c, then there exists a y in S that is greater than x. If x is greater than c, then there exists a y that is not in S and is less than x.

Now we argue based on the continuity of f. For any given ε > 0, there exists a δ such that for all x in the interval (c-δ, c+δ), the absolute difference between f(x) and f(c) is less than ε. In the "left" neighborhood, we can find some point x₀ such that f(x₀) < k and the difference between f(c) and f(x₀) is less than ε, meaning f(c) must be less than k + ε. Similarly in the "right" neighborhood, we can find a point x₁ such that f(x₁) ≥ k and the difference between f(c) and f(x₁) is less than ε, implying f(c) must be greater than k - ε.

Finally, by the squeeze theorem, for any small positive ε, if k - ε < f(c) < k + ε, it implies that f(c) equals k. 

Thus proving the theorem.