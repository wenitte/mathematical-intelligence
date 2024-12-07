The theorem called "Prime Reciprocal Divergence" states that the sum of the reciprocals of all prime numbers does not converge. In simple terms, if you keep adding the fractions where the numerator is 1 and the denominator is a prime number, those fractions don't add up to a fixed number, they continue to grow indefinitely.

Let's assume, just for argument's sake, that the sum does converge. We then look for the smallest 'k' such that the sum of the reciprocals of the prime numbers from k+1 onwards is less than 1/2.

We define two sets of natural numbers from 1 to any number 'x'. The set 'Mx' contains numbers that are not divisible by any prime greater than 'k'. The set 'Nx' contains numbers that are divisible by the 'i'th prime.

We now claim that each number in set 'Mx' is a product of a square 'm' and a 'square-free' number 'r' (meaning 'r' has no square factors other than 1). Moreover, the prime factors of 'r' are among the first 'k' primes. This creates some limitations on the number of different possibilities for 'r' and 'm'. The number of possibilities for 'r' is no more than 2^k, since it can only have the first 'k' primes as factors. And the possibilities for 'm' is no more than sqrt(x). This means the size of the set 'Mx' is bounded above by 2^k times sqrt(x).

On the other hand, all the numbers from 1 to 'x' that aren't in 'Mx' belong to one of the 'Nx' sets. We can estimate the size of each 'Nx' set as about x divided by the 'i'th prime, which gives us a total sum for all the 'Nx' sets of less than x/2. This implies that the size of 'Mx' is more than x/2.

Here is where we encounter contradiction. If we take 'x' to be a number not less than 2^(2k+2), we find that x/2 is more than 2^k times sqrt(x). But this is impossible, as it implies that the size of 'Mx' is simultaneously more than x/2 and less than x/2. This contradiction implies that our original assumption – that the sum of the reciprocals of the primes converges – must be false.

Therefore, the proof by contradiction establishes the theorem that the sum of the reciprocals of the primes diverges. That is, as you add more and more reciprocals of primes, the total continues to grow without bound.